import React from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import crystals from "./crystals.json";

class App extends React.Component {

  state={
    crystals: crystals,
    value: 0,
    score: 0,
    losses: 0,
    clicked: []
  };

//Logic for app start
  compoundDidMount(){
    this.resetGame();
  }

  generateRandomValue = () => {
    const value = Math.floor(Math.random() + 1);
    this.setState({value: value});
  }

  removeCrystal = id => {
    const crystals = this.state.crystals.filter(crystal => crystal.id !== id);
    this.setState({crystals});
  }

  checkClick = () => {
    const clicked = [];
    onclick(this.push(clicked));
  }

  updateScore = () => {
    this.setState({score: this.state.score + 1});
  }

  updateLosses = () => {
    this.setState({losses: this.state.losses + 1});
  }

  resetGame = () => {
    this.setState({
      crystals: crystals,
      score: 0,
      clicked: [],
    });
  }

  game = () => {
    if(this.state.clicked === crystals.id){
      this.updateLosses();
      this.resetGame();
    } else {
      this.updateScore();
    }
  }
//Logic for app end

  render(){
    return(
      <div>
        <Header 
            score={this.state.score}
            losses={this.state.losses}
        />
          <Container>
            {this.state.crystals.map(crystal => (
              <Card 
                id={crystal.id}
                key={crystal.id}
                name={crystal.name}
                image={crystal.image}
                value={this.generateRandomValue}
                clicked={this.clicked}
                removeCrystal={this.removeCrystal}
              />
            ))}
          </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
