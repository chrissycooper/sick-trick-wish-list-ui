import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: []
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