import React from 'react';
import { Link } from 'react-router-dom';

function NewCard(props) {
    return (
        <>
            <li className="cards__item">
                <div className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <a href={props.urllabel}><img src={props.src} alt="travel image" className="cards__item__img" /></a>
                    </figure>
                    <div className="cards__item__info">
                        <a href={props.urltext}><h5 className="cards__item__text">{props.text}</h5></a>
                    </div>
                </div>
            </li>
        </>
    )
}

export default NewCard;