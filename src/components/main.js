import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserDash from './userDash';
import RegisterUser from './registerUser';
import LoginUser from './loginUser';
import RaceFinder from './raceFinder';

//route links for project
const Main = () => (
    <Switch>
        <Route exact path="/" component={LoginUser}/>
        <Route exact path="/register" component={RegisterUser}/>
        <Route exact path="/home" component = {UserDash}/>
        <Route exact path="/search" component={RaceFinder}/>      
    </Switch>
);
export default Main;