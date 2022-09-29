import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className="about">
            <Navigation />
            <h1>À Propos</h1>
            <br />
            <p>Initiation à React. Site qui utilise une API pour afficher tout les pays du monde (250), ainsi que des informations sur chaques pays: nom du pays, capitale, population.
            </p>
            <br/>
            <p>Information sur l'<a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">API</a></p>
        </div>
    );
};

export default About;