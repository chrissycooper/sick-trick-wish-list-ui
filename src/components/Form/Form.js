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

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
        />
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
        />
        <select name='stance' id='stance'>
          <option value="" disabled selected>Select the stance</option>
          <option value={this.state.stance}>Regular</option>
          <option value={this.state.stance}>Switch</option>
        </select>
        <select name='obstacle' id='obstacle'>
        <option value="" disabled selected>Select the obstacle</option>
          <option value={this.state.obstacle}>Flatground</option>
          <option value={this.state.obstacle}>Rail</option>
          <option value={this.state.obstacle}>Stairs</option>
          <option value={this.state.obstacle}>Ledge</option>
          <option value={this.state.obstacle}>Pool</option>
        </select>
        <button>SEND IT!</button>
      </form>
    )
  }

}

export default Form