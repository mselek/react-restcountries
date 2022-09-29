import React from 'react';

const Card = (props) => {
    const { country } = props; // equivaut à -> const country = props.country
    // Format le nb de population
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <li className="card">
            <img src={country.flags.png} title={country.name} alt="flag" />
            <div className="data-container">
                <ul>
                    <li><span className="material-icons">public</span>{country.name}</li>
                    <li><span className="material-icons">location_on</span>{country.capital}</li>
                    <li><span className="material-icons">people</span>{numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;