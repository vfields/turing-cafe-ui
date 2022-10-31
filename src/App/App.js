import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import ResContainer from '../ResContainer/ResContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({
        reservations: data
      }))
  }

  addReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
      .then(response => response.json())
      .then(newReservation => {
        this.setState({
          reservations: [...this.state.reservations, reservation]
        })
      })
  }

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: "DELETE"
    })
        .then(response => response.json())
        .then(reservations => {
          this.setState({
            reservations: reservations
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
            deleteReservation={this.deleteReservation}
          />
        </div>
      </div>
    )
  }
}

export default App;
