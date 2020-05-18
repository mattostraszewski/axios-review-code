import React, { Component } from 'react';
import Form from './Components/Form';
import axios from 'axios'
import VehicleDisplay from './Components/VehicleDisplay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    axios.get("https://joes-autos.herokuapp.com/api/")
      .then(res => {
        this.setState({ vehicles: res.data })
      })
      .catch(err => console.log(err));
  }

  addVehicle = (newCar) => {
    axios.post("https://joes-autos.herokuapp.com/api/", newCar)
      .then(res => {
        this.setState({ vehicles: res.data.vehicles })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.vehicles)
    const mappedVehicles = this.state.vehicles.map((vehicle, i) => (
      <VehicleDisplay key={i} vehicle={vehicle} />
    ))
    return (
      <div className="App">
        WR1 HTTP/Axios Review
        <Form addVehicle={this.addVehicle} />
        {mappedVehicles}
      </div>
    )
  }
}

export default App;