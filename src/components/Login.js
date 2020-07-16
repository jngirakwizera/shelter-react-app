import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class Login extends Component {
  

  constructor(props) { 
    super(props);
    this.state = { 
        username: '',
        password: ''
     }
  }

  
  login = () => {
      console.log(`login`);
    let credentials = {
        email_address: this.state.username,
        password: this.state.password
    }
    console.log(`credentials is ${JSON.stringify(credentials)}`);
    fetch("http://localhost:3000/users/authenticate/", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                console.log(`The data from logging is ${JSON.stringify(theData)}`);
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  }

  onChangeUsername = (e) => {
    this.setState({
        username: e.target.value,
    });
}

onChangePassword = (e) => {
    this.setState({
        password: e.target.value,
    });
}

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <div className="login-form" >
            <TextField
              
              onChange={this.onChangeUsername}
              name="username"
              label="Username"
              type="text" />
            <TextField
              
            
              onChange={this.onChangePassword}
              name="password"
              label="Password"
              type="password" />
            <Button
              className="login-button"
              variant="contained"
              onClick={this.login}
              color="primary">Login</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;