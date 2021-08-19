import React, {Component} from 'react';
import './Pokecard.css';

//const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number<=999 ? `00${number}`.slice(-3) : number)
class Pokecard extends Component{
    render() {
        const pokemon = this.props.pokemon;
        const image = `${POKE_API}${padToThree(this.props.pokemon.id)}.png`
        return (
            <div className="card">
                <h1>{pokemon.name}</h1>
                <img src={image} alt={this.props.pokemon.name} />
                <div>Type: {this.props.pokemon.type}</div>
                <div>EXP: {this.props.pokemon.base_experience}</div>
            </div>
        )
    }
}
export default Pokecard;
