import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  state = {
    pokemon,
    clickedPokemon: [],
    score: 0
  };

  imageClick = event => {
    const currentPoke = event.target.alt;
    const PokeAlreadyClicked =
      this.state.clickedPokemon.indexOf(currentPoke) > -1;

    if (PokeAlreadyClicked) {
      this.setState({
        pokemon: this.state.pokemon.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPokemon: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          pokemon: this.state.pokemon.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPokemon: this.state.clickedPokemon.concat(
            currentPoke
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              pokemon: this.state.pokemon.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPokemon: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              imageClick={this.imageClick}
              id={pokemon.id}
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;