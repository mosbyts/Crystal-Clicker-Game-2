import React from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import crystals from "./crystals.json";

class App extends React.Component {

  state={
    crystals: crystals,
    score: 0,
    losses: 0,
    clicked: []
  };

  compoundDidMount(){
    this.resetGame();
  }

  randomizeCrystals = () => {
    const value = Math.floor(Math.random() + 1);
    return crystals[value];
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
    this.randomizeCrystals();
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
    };
  }

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
                clicked={this.clicked}
              />
            ))}
          </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
