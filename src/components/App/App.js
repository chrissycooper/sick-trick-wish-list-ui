import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: [{stance: 'regular', name: 'treflip', obstacle: "flat ground", tutorial: "a url!", id: 1 }]
    }
  }

  componentDidMount(){

  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks />
      </div>
    );
  }
}

export default App;