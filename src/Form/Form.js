import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    const reservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: parseInt(this.state.number)
    }
    this.props.addReservation(reservation);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="date"
          value={this.state.date}
          placeholder="Date (mm/dd)"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="time"
          value={this.state.time}
          placeholder="Time"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="number"
          value={this.state.number}
          placeholder="Number of guests"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
