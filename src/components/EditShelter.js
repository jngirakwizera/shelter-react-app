import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

import {Redirect} from "react-router-dom";

class EditShelter extends Component {
  

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
        shelterId:''
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
    
    fetch(`http://localhost:3000/shelters/${this.state.shelterId}`, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${this.props.token}`
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((theData) => {
                console.log(`The data from create shelters is ${JSON.stringify(theData)}`);
                if(theData.message === "Update Shelter doc a success."){
                    console.log("updated shelter ");
                    alert("Updated Shelter Successfully!")
                    
                }
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
  }

//   shelter_id: req.body.shelter_id, 
//                 user_id: req.body.user_id

getShelterUser = () => {
    console.log(`getShelterUser`);
    

  
  fetch(`http://localhost:3000/shelterUsers/user/${this.props.user._id}`, {
          method: 'get',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${this.props.token}`
          },
        //   body: JSON.stringify(credentials),
      })
          .then((response) => response.json())
          .then((theData) => {
              console.log(`The data from get shelter user is ${JSON.stringify(theData)}`);
              let shelter = theData.shelter_id;
              let name = shelter.name;
              let phone = shelter.phone;
              let address = shelter.adress;
              let numOfBeds = shelter.number_of_beds;
              let bedsAvailable = shelter.beds_available;
              let shelterId = shelter._id;

              this.setState({
                  name: name,
                  phone:phone,
                  address:address,
                  numOfBeds:numOfBeds,
                  bedsAvailable:bedsAvailable,
                  shelterId: shelterId
              })

            //   name: this.state.name,
            //   phone: this.state.phone,
            //   adress: this.state.address,
            //   number_of_beds: parseInt(this.state.numOfBeds),
            //   beds_available: parseInt(this.state.bedsAvailable),
            //   if(theData.message === "Shelter User created successfully"){
            //     //   this.setState({
            //     //       createdShelter:true
            //     //   });
            //   }
             
          })
          .catch((error) => {
              console.error('Error:', error);
          });
}

componentDidMount(){
    this.getShelterUser();
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
              value={this.state.name}
              name="name"
              label="Name"
              type="text" />
            <TextField
              onChange={this.onChangePhone}
              value={this.state.phone}
              name="phone"
              label="Phone"
              type="text" />
               <TextField
              onChange={this.onChangeAddress}
              value={this.state.address}
              name="address"
              label="Address"
              type="text" />
            <TextField
              onChange={this.onChangeNumOfBeds}
              name="numberOfBeds"
              value={this.state.numOfBeds}
              label="Number Of Beds"
              type="text" />
              <TextField
              onChange={this.onChangeBedsAvailable}
              name="bedsAvailable"
              value={this.state.bedsAvailable}
              label="Beds Available"
              type="text" />
            <Button
              className="login-button"
              variant="contained"
              onClick={this.postShelter}
              color="primary">Update Shelter</Button>
          </div>
        </Container>
      </div>
    ):  <Redirect to="/"/>;
  }
}

export default EditShelter;