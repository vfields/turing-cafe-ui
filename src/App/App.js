import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import ResContainer from '../ResContainer/ResContainer.js'
import {getReservations, postReservation} from '../apiCalls.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservations()
      .then(data => this.setState({
        reservations: data,
        error: ''
      }))
      .catch(error => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong, please try refreshing the page or coming back later!`
        })
      })
  }

  addReservation = (reservation) => {
    postReservation(reservation)
      .then(newReservation => {
        this.setState({
          reservations: [...this.state.reservations, reservation],
          error: ''
        })
      })
      .catch(error => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong adding your reservation. Make sure you filled in all input fields!`
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
        {this.state.error && <h2 className="error">{this.state.error}</h2>}
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
