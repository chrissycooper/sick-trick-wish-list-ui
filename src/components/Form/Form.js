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

  handleChange = event => { //if i changed this to hooks, it could be setInputs inside thi function instead of set state,
    this.setState({[event.target.name]: event.target.value});
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      obstacle: '',
      name: '',
      tutorial: ''
    })
  }

  submitForm = event => {
    event.preventDefault();

    const newTrick = {
      id: Date.now(),
      stance: this.state.stance,
      obstacle: this.state.obstacle,
      name: this.state.name,
      tutorial: this.state.tutorial
    }

    this.props.addNewTrick(newTrick);
    this.clearInputs();
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
          <option value="" defaultValue>Select the stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <select name='obstacle' id='obstacle' value={this.state.obstacle} onChange={event => this.handleChange(event)}>
        <option value="" defaultValue>Select the obstacle</option>
          <option value='flatground'>Flatground</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='ledge'>Ledge</option>
          <option value='pool'>Pool</option>
        </select>
        <button onClick={event => this.submitForm(event)}>SEND IT!</button>
      </form>
    )
  }

}

export default Form