import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

    return (

        <div>

            <h1>Chi Siamo</h1>
            <p>Benvenuti nel nostro blog! Siamo un gruppo di appassionati di tecnologia e scrittura. Il nostro obiettivo è condividere idee, articoli e storie con voi.</p>
            <Link to="/about">About us</Link>

        </div>

    );
};

export default About;