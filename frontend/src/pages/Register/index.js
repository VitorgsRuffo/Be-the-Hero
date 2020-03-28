import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

//importing axios api:
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    //we'll have a state for each one of the inputs.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [fs, setFs] = useState('');

    //this Component will let us redirect the user to another page when needed:
    const history = useHistory();

    //it'll handle the data sumbmitted in this page form
    async function handleRegister(event) {
        //does not let the default behaviour of HTML that reloads the page when the form is submitted.
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            fs
        };

        try{
            //we have already set this route '/ongs' in the backend to handle the new ong registration data and register it on the website.
            const response = await api.post('ongs', data);  //obs: axios will parse this obj into json so we don't need to do so.
            //the api will return the response returned by the function that is in the backend handling post requests to the 'ongs' route.
            
            alert(`Success! ID: ${response.data.id}`);
            
            //redirects user to the login page:
            history.push('/');

        }catch(error){
            alert('Error registering, please try again.');
        }
    }   

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Register</h1>

                    <p>Register yourself, log in our website and help people find your ONG's incidents.</p>

                    <Link className="back-link" to="/">
                        
                        <FiArrowLeft size={16} color="#E02041" />
                        Go back to login page.
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="ONG name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)} 
                    />
                    <div className="input-group">
                        <input 
                            placeholder="City"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input 
                            placeholder="FS" 
                            style={{ width:80 }}
                            value={fs}
                            onChange={event => setFs(event.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    );

}