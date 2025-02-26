import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {

    return (

        <div>

            <h1>Contatti</h1>
            <p>Se desideri entrare in contatto con noi, puoi scrivere un'email a: <strong>info@nostroblog.com</strong></p>
            <Link to="/contacts">Contacts</Link>

        </div>

    );
};

export default Contacts; 