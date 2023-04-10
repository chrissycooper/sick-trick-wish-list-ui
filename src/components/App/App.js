import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import getAllTricks from '../../apicalls';
import Form from '../Form/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: [{stance: 'regular', name: 'treflip', obstacle: "flat ground", tutorial: "a url!", id: 1 }]
    }
  }

  componentDidMount(){
    getAllTricks()
    .then(data => {
      this.setState({tricks: data})
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;