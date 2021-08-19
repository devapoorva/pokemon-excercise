import React, {Component} from 'react';
import Pokemon from "../pokemon/Pokemon";
import all from "../../constants/contacts";

class App extends Component{
    render() {
        let hand1 = [];
        let hand2 = [...all];
        while (hand1.length<hand2.length){
            let randId = Math.floor(Math.random()*hand2.length);
            let randomPokemon = hand2.splice(randId,1)[0];
            hand1.push(randomPokemon);
        }
        let exp1 = hand1.reduce((exp,pokemon)=>exp+pokemon.base_experience,0);
        let exp2 = hand2.reduce((exp,pokemon)=>exp+pokemon.base_experience,0);
        /*const data = all.sort(() => Math.random() - Math.random()).slice(0, 4);
        const data1 = all.sort(() => Math.random() - Math.random()).slice(0, 4);*/
        return (
            <div>
                <Pokemon data={hand1} exp={exp1} isWinner={exp1>exp2} />
                <Pokemon data={hand2} exp={exp2} isWinner={exp2>exp1} />
            </div>
        )
    }
}

export default App;

