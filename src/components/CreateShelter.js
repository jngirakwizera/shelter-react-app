import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import {Redirect} from "react-router-dom";

class CreateShelter extends Component {
  

  constructor(props) { 
    super(props);
    this.state = { 
        name: '',
        phone: '',
        address: '',
        bedsAvailable: '0',
        numOfBeds: '0',
        createdShelter: false,
        shelterId: '',
        userId:'',
     }
  }

  
  postShelter = () => {
      console.log(`postShelter`);
      

    let credentials = {
        name: this.state.name,
        phone: this.state.phone,
        adress: this.state.address,
        number_of_beds: parseInt(this.state.numOfBeds),
        beds_available: parseInt(this.state.bedsAvailable),
    }
    
    fetch("http://localhost:3000/shelters/", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                console.log(`The data from create shelters is ${JSON.stringify(theData)}`);
                if(theData.message === "Shelter created successfully"){
                    
                    this.setState({
                        shelterId: theData.newShelter._id
                    },()=>{
                        this.postShelterUser()
                    });
                }
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  }

//   shelter_id: req.body.shelter_id, 
//                 user_id: req.body.user_id

postShelterUser = () => {
    console.log(`postShelterUser`);
    

  let credentials = {
    shelter_id: this.state.shelterId,
    user_id: this.props.user._id,
     
  }
  
  fetch("http://localhost:3000/shelterUsers/", {
          method: 'post',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${this.props.token}`
          },
          body: JSON.stringify(credentials),
      })
          .then((response) => response.json())
          .then((theData) => {
              console.log(`The data from create shelter users is ${JSON.stringify(theData)}`);
              if(theData.message === "Shelter User created successfully"){
                  this.setState({
                      createdShelter:true
                  });
              }
             
          })
          .catch((error) => {
              console.error('Error:', error);
          });
}

onChangePhone = (e) => {
    this.setState({
        phone: e.target.value,
    });
}

onChangeName = (e) => {
    this.setState({
        name: e.target.value,
    });
}

onChangeAddress = (e) => {
    this.setState({
        address: e.target.value,
    });
}

onChangeBedsAvailable = (e) => {
    this.setState({
        bedsAvailable: e.target.value,
    });
}

onChangeNumOfBeds = (e) => {
    this.setState({
        numOfBeds: e.target.value,
    });
}

  render() {
    return !this.state.createdShelter ? (
      <div className="App">
        <Container maxWidth="sm">
          <div className="login-form" >
            <TextField
              onChange={this.onChangeName}
              name="name"
              label="Name"
              type="text" />
            <TextField
              onChange={this.onChangePhone}
              name="phone"
              label="Phone"
              type="text" />
               <TextField
              onChange={this.onChangeAddress}
              name="address"
              label="Address"
              type="text" />
            <TextField
              onChange={this.onChangeNumOfBeds}
              name="numberOfBeds"
              label="Number Of Beds"
              type="text" />
              <TextField
              onChange={this.onChangeBedsAvailable}
              name="bedsAvailable"
              label="Beds Available"
              type="text" />
            <Button
              className="login-button"
              variant="contained"
              onClick={this.postShelter}
              color="primary">Create Shelter</Button>
          </div>
        </Container>
      </div>
    ):  <Redirect to="/"/>;
  }
}

export default CreateShelter;