import React, { Component } from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './ShelterDetail.css';

class ShelterDetail extends Component {
    state = { 
        shelterId: null,
        shelterData: null,
        name: "",
        phone:"",
        address:"",
        numOfBeds:"",
        bedsAvailable:"",
     }

     loadShelterData = async () => {

        const url = "http://localhost:3000/shelters/" + this.state.shelterId ;

        fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(`response ${response}`)
            this.setState({ shelterData: response, name: response.name, phone:response.phone, address: response.adress, numOfBeds:response.number_of_beds, bedsAvailable:response.beds_available })
        })

      
    }

    componentDidMount() {
        const shelterId = this.props.match.params.id;
        
        this.setState({
            shelterId: shelterId
        },()=>{
            this.loadShelterData();
        });
    }
    render() { 
        return ( 
            <div id="shelterContainer">
                <Card key="shelterDetail" id="cardContainer">
                    <CardContent id="cardText">
                        <span>{this.state.name.toUpperCase()}</span>
                        <ul>
                        <li><strong>Shelter Name:</strong> {this.state.name}</li>
                        <li><strong>Phone:</strong> <a href={`tel:${this.state.phonephone}`}>{this.state.phone}</a></li>
                        <li><strong>Address:</strong> {this.state.address}</li>
                        <li><strong>Beds Available:</strong> {this.state.bedsAvailable}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                </Card>
            </div>
         );
    }
}
 
export default ShelterDetail;