import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Login from './components/Login';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {/* <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
    );
};

export default Router;