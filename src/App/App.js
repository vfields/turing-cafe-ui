import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import ResContainer from '../ResContainer/ResContainer.js'
import {getReservations, postReservation} from '../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({
        reservations: data
      }))
  }

  addReservation = (reservation) => {
    postReservation(reservation)
      .then(newReservation => {
        this.setState({
          reservations: [...this.state.reservations, reservation]
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <ResContainer
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
