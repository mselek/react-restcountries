import React from 'react';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <h1>Erreur</h1>
            <p>404 : La page demandée n'existe pas !</p>
        </div>
    );
};

export default NotFound;