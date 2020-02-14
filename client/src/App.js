import React from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      players: []
    }
  }
  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(response=>{
      console.log('players',response.data)
      this.state({players: response.data})
    })
    .catch(error=>{
      console.log('This is an error',error)
    })
  }
  render(){
  return (
    <div className="App">
      {this.state.players.map(player=>{
        <PlayerCard key={player.id} player={player}/>
})}
      
    </div>
  );
  }
}

export default App;
