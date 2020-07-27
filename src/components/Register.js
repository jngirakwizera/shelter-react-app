import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import {Link, Redirect} from "react-router-dom";

class Register extends Component {
  

  constructor(props) { 
    super(props);
    this.state = { 
        username: '',
        confirmPassword: '',
        password: '',
        first_name: '',
        last_name: '',
        phone:''
     }
  }

  
  register = () => {
      console.log(`register`);
    

    let credentials = {
        email_address: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name:this.state.last_name,
        phone_number: this.state.phone,
        is_admin:false
    }
    console.log(`credentials is ${JSON.stringify(credentials)}`);
    fetch("http://localhost:3000/users/", {
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
                if(theData.message === "Person created successfully"){
                    this.props.setToken(this.state);
                }
               
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

onChangeConfirmPassword = (e) => {
    this.setState({
        confirmPassword: e.target.value,
    });
}

onChangeFirstName = (e) => {
    this.setState({
        first_name: e.target.value,
    });
}

onChangeLastName = (e) => {
    this.setState({
        last_name: e.target.value,
    });
}

onChangePhone = (e) => {
    this.setState({
        phone: e.target.value,
    });
}

  render() {
    return !this.props.token ? (
      <div className="App">
        <Container maxWidth="sm">
          <div class="login-form" >
          <TextField
              onChange={this.onChangeUsername}
              name="username"
              label="Email"
              type="text" />
              <TextField
              onChange={this.onChangePhone}
              name="phone"
              label="Phone"
              type="text" />
            <TextField
              onChange={this.onChangeFirstName}
              name="firstName"
              label="First Name"
              type="text" />

              <TextField
              onChange={this.onChangeLastName}
              name="lastName"
              label="Last Name"
              type="text" />

            <TextField
              
            
              onChange={this.onChangePassword}
              name="password"
              label="Password"
              type="password" />
              <TextField
              
            
              onChange={this.onChangeConfirmPassword}
              name="confirmpassword"
              label="Confirm Password"
              type="password" />
            <Button
              className="login-button"
              variant="contained"
              onClick={this.register}
              color="primary">Register</Button>
          </div>
        </Container>
      </div>
    ):  <Redirect to="/"/>;
  }
}

export default Register;