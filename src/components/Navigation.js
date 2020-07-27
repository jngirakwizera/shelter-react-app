import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = (props) => {

    
    let loggedInList =    <div class="navRow"><li className="nav-list-item">
            <Link to="/createShelter">Create Shelter</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/editShelter">Edit Shelter</Link>
        </li></div>;

    let unauthorizedList = <div class="navRow">
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/register">Register</Link>
                    </li>
    </div>;

    let listToShow = unauthorizedList;

    if(props.user){
        listToShow = loggedInList;
    }

    return (
        <AppBar position="relative" style={{ background: '#2E3B55' }}>
            <Toolbar>
                {/* <IconButton color="inherit">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Care Amarillo
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Shelters</Link>
                    </li>
                    {listToShow}
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation