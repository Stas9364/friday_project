import React from 'react';
import style from './profile.module.css'
const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.border}>
                <h1>Personal information</h1>
                <img src="" alt="'some img"/>
                <h2>name</h2>
                <h2>email</h2>
                <button>logOut</button>
            </div>

        </div>
    );
};

export default Profile;