import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Login from './containers/Login';
import ShelterDetail from './components/ShelterDetail';
import CreateShelter from './containers/CreateShelter';
import ProtectedRoute from './containers/ProtectedRoute';
import Register from './containers/Register';
import EditShelter from './containers/EditShelter';


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/createShelter" component={CreateShelter} />
            <ProtectedRoute exact path="/editShelter" component={EditShelter} />
            <Route path="/shelter/:id" component={ShelterDetail} />
            {/* <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
    );
};

export default Router;