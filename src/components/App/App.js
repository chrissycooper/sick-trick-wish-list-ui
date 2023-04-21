import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';
import { getAllTricks, postNewTrick } from '../../apicalls';
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
    postNewTrick(newTrick)
    .then(res => res.json())
    .then( data =>
      this.setState({ tricks: [...this.state.tricks, data ] })
    )
  }

  deleteTrick = (id) => {
    const updatedTricks = this.state.tricks.filter(trick => trick.id !== id)
    this.setState({tricks: updatedTricks})
  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addNewTrick={this.addNewTrick}/>
        <Tricks tricks={this.state.tricks} deleteTrick={this.deleteTrick}/>
      </div>
    );
  }
}

export default App;