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
      console.log(data)
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