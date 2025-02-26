import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (

        <div>

            <h1>Benvenuto nel Blog</h1>
            <p>Visita la lista degli articoli:</p>
            <Link to="/posts">Vai ai post</Link>

        </div>

    );

}

export default Home; 