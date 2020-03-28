//useEffect will help us to run a function in a specific moment(we'll use it to list all the logged ong incidents when the user goes to the profile page)
import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {

    //state for storing the array of objects(each one is an incident) returned by the get method that aims to get the logged ong incidents list.
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    //getting the ongName from localStorage:
    const ongName = localStorage.getItem('ongName');

    //getting the ongId from localStorage:
    const ongId = localStorage.getItem('ongId');

    //1st para: function to be runned (in this case the function to load the ong incidents), 2nd one: when it's gonna be runned.//every time the info inside the array(2nd para) change the function will be executed.
    useEffect(() => {

        //as second parameter we need to pass as an headers object inside a object that has the Authorization header cointaining the ongId of the logged ong.
        //we need the ong id because we wanna list only the incidents created by the logged ong.
        //get method is async(i.e, do not have immediate result).
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        }) 

    }, [ongId]); //whenever we enter this page the ongId var is reset so that will trigger the callback(1st para) in the correct time.

    //function for adding functionality(delete) to the incident's trash icon:
    async function handleDeleteIncident(id){
        try{
            //this will make a delete Request to the following route. We need to pass the ongId because only the ong that created the incident is able to delete it.
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            
            //removing the incident from the screen when clicking on the trash icon. That way we don't need to reload the page to see the effect of the delete request.
            setIncidents(incidents.filter(incident => incident.id !== id));
            
        }catch(error){
            alert('Error deleting the incident. Please, try again.');
        }
    }

    function handleLogout() {

        //cleans all the local variables stored in the local storage:
        localStorage.clear();

        history.push('/');
    

    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>

                <span>Welcome! {ongName}</span>

                <Link className="button" to="/incidents/new">Register a new incident</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Incidents</h1>

            <ul>
                {   //to embedded js code into JSX we use {}
                    //incidents is an array. map method is like a foreach. each array element in each iteration is put into the incident para of the callback.
                    //to return JSX content we only need to put ir inside ()
                    //when we do an iteration in React we need to pass a key attribute to the first element of the JSX being 'repeated' so that react can identify each block. 
                }
                {incidents.map(incident => (
                <li key={incident.id}>
                    <strong>Incident:</strong>
                    <p>{incident.title}</p>

                    <strong>Description:</strong>
                    <p>{incident.description}</p>

                    <strong>Value:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)}type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
                
                    
                
            </ul>
        </div>
    );
}

