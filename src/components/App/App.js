import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import getAllTricks from '../../apicalls';
import Form from '../Form/Form';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tricks: []
    }
  }

  componentDidMount(){
    getAllTricks()
    .then(data => {
      this.setState({tricks: data})
    })
  }

  addNewTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] });
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addNewTrick={this.addNewTrick}/>
        <Tricks tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;