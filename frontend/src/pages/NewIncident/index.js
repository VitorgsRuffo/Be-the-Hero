import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident (){

    //the proccess for interacting to the backend is similar to the one used for registering a new ong.
    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try{

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');

        }catch(error){
            alert('Error when registering new incident. Please, try again.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register new incident</h1>

                    <p>Describe the case to find a hero to solve that problem.</p>

                    <Link className="back-link" to="/profile">
                        
                        <FiArrowLeft size={16} color="#E02041" />
                        Go back
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Incident title"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    <input 
                        placeholder="Money needed"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                    
                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

