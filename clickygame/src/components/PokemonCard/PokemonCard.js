import React from "react";
import "./PokemonCard.css";

const PokemonCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default PokemonCard;