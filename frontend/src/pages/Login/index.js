//Note the pages will be created using JavaScript and React Components.

import React, { useState } from 'react';

import api from '../../services/api';

//we are going to use a React component to create links in the page and not the HTML 'a' tags.
//That's because by using it we lost the SPA concept that React allows us to use and change the page by changing the route and not reloading the whole page. The whole page are reloaded by clickin <a>.
import { Link, useHistory } from 'react-router-dom';

//package that contain icons - installation: npm install react-icons
import { FiLogIn } from 'react-icons/fi'; //fi: feather icons - we can go to the website to see the icons available.
//FiLogOut is a specific icon and as we installed the icons package with the help of npm the icons are already "converted" into a Component.
//we can pass the size and color as props to the icon Component.

//importing the styles;
import './styles.css';

//importing a image (and putting a reference to it in the heroesImg var) to render in the HTML returned by our component (in this case the page):
import heroesImg from '../../assets/heroes.png';

import logoImg from '../../assets/logo.svg';



export default function Login(){
    //we are going to use a state to store the ong ID:
    const [id, setId] = useState('');

    //setting a history var that will let us redict the user to profile page in case he enters a valid ID.
    const history = useHistory();

    //function that will be called when user submits the form.
    async function handleLogin(event){

        //prevents the redirecting when a form is submitted.
        event.preventDefault();

        try{

            const response = await api.post('/sessions', { id });

            //If the id is valid we'll need to save it along with the ong name on local storage because will need that info.
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(error){

            alert('Error logging in. Please, try again.');

        }

    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
            

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input 
                        placeholder="ONG ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Go!</button>
                    
                    
                    <Link className="back-link" to="/register">
                        
                        <FiLogIn size={16} color="#E02041" />
                        Don't have a registration.
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}