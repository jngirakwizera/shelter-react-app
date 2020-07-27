import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Container
  } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Navigation = (props) => {

    const logout = () =>{
       props.unsetToken(props.token);
    }
    
    let loggedInList =    <div class="navRow"><li className="nav-list-item">
            <Link to="/createShelter">Create Shelter</Link>
        </li>
        <li className="nav-list-item">
            <Link to="/editShelter">Edit Shelter</Link>
        </li>
        <li className="nav-list-item">
            <Button id="navButton" onClick={logout}>Logout</Button>
        </li>
        </div>;

    let unauthorizedList = <div class="navRow">
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/register">Register</Link>
                    </li>
    </div>;

    let listToShow = unauthorizedList;

    if(props.token){
        listToShow = loggedInList;
    }
   const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" >
            <Toolbar>
                {/* <IconButton color="inherit">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" >
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
        </div>
    )

}

//edit 

export default Navigation