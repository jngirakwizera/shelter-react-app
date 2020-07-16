import React, { Component } from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/shelters";


class Home extends Component {
    

    constructor(props) {
        super(props);
        this.state = { 
            shelters:[]
         }
    }

    componentDidMount(){
        this.fetchShelters();
    }

   fetchShelters = () => {
        fetch(url)
        .then(res => res.json())
        .then(response => {
            this.setState({ shelters: response })
        })
    }
   
    
    render() { 
        return ( 
            <div>
            {this.state.shelters.map((shelter, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{shelter.name.toUpperCase()}</span>
                        <ul>
                        <li>Shelter Name: {shelter["name"]}</li>
                        <li>Phone: {shelter["phone"]}</li>
                        <li>Address: {shelter["adress"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/shelter/${shelter.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
            </div>
         );
    }
}
 
export default Home;