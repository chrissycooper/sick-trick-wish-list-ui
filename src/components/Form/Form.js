import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      obstacle: '',
      name: '',
      tutorial: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Tutorial Link'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />
        <select name='stance' id='stance' onChange={event => this.handleChange(event)}>
          <option value="" disabled selected>Select the stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <select name='obstacle' id='obstacle' value={this.state.obstacle} onChange={event => this.handleChange(event)}>
        <option value="" disabled selected>Select the obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='ledge'>Ledge</option>
          <option value='pool'>Pool</option>
        </select>
        <button>SEND IT!</button>
      </form>
    )
  }

}

export default Form