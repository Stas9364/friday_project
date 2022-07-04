import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Links from '../NavLinks/Links';
import Login from '../Login';
import Registration from '../Registration';
import Profile from '../Profile';
import PassRecovery from '../PassRecovery';
import PassCreate from '../PassCreate';
import Test from '../Test';
import Error404 from '../Error/Error404';

export const PATH = {
    registration: 'registration',
    profile: 'profile',
    passRecovery: 'passRecovery',
    passCreate: 'passCreate',
    test: 'test'
}

export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Links/>}>
                    <Route index element={<Login/>}/>
                    <Route path={PATH.registration} element={<Registration/>}/>
                    <Route path={PATH.profile} element={<Profile/>}/>
                    <Route path={PATH.passRecovery} element={<PassRecovery/>}/>
                    <Route path={PATH.passCreate} element={<PassCreate/>}/>
                    <Route path={PATH.test} element={<Test/>}/>
                </Route>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    );
};