import React from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import crystals from "./crystals.json";

class App extends React.Component {

  state={
    crystals: crystals,
    wins: 0,
    losses: 0,
    clicked: []
  };

//Logic for app start
  compoundDidMount(){
    this.generateRandomValue();
  }

  generateRandomValue = () => {
    const value = Math.floor(Math.random() + 1);
    this.setState({crystals: value});
  }

  removeCrystal = id => {
    const crystals = this.state.crystals.filter(crystal => crystal.id !== id);
    this.setState({crystals});
  }

  checkClick = () => {
    const clicked = [];
  }

  updateWins = () => {
    const wins = 0;
    this.setState({wins: this.state.wins + 1});
  }

  updateLosses = () => {
    const losses = 0;
    this.setState({losses: this.state.losses + 1});
  }

  resetGame = () => {

  }
//Logic for app end

  render(){
    return(
      <div>
        <Header />
          <Container>
            {this.state.crystals.map(crystal => (
              <Card 
                removeCrystal={this.removeCrystal}
                id={crystal.id}
                key={crystal.id}
                name={crystal.name}
                value={this.generateRandomValue}
                image={crystal.image}
              />
            ))}
          </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
