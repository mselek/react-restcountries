import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="navigation">
            <img src="./img/logo192.png" alt="logo" />
            <NavLink exact to ="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="about" activeClassName="nav-active">
                À Propos
            </NavLink>
        </div>
    );
};

export default Navigation;