import React from 'react';
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import crystals from "./crystals.json";

class App extends React.Component {

  state={
    crystals
  };

  removeCrystal = id => {
    const crystals = this.state.crystals.filter(crystal => crystal.id !== id);
    this.setState({crystals});
  }

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
