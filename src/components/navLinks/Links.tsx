import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from './Links.module.css'

const Links = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <NavLink to={'/'}>Login</NavLink>
                <NavLink to={'/registration'}>Registration</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/passRecovery'}>PassRecovery</NavLink>
                <NavLink to={'/passCreate'}>PassCreate</NavLink>
                <NavLink to={'/test'}>Test</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Links;