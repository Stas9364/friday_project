import React from 'react';
import img from '../../assets/img/404Page.png';
import styles from './Error404.module.css';
import {NavLink} from "react-router-dom";

const Error404 = () => {
    return (
        <div>
            <NavLink
                to={'/'}
                className={styles.link}
            >Go HOME.</NavLink>

            <img src={img} alt="error 404"/>
            <h1 className={styles.text}>Page not found!</h1>
        </div>
    );
};

export default Error404;