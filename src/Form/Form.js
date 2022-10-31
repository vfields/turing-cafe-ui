import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'placeholder'
    }
  }

  render() {
    return (
      <p>I am Form</p>
    )
  }
}

export default Form;
