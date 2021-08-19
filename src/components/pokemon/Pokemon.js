import React, { Component } from 'react';
import Pokecard from "../pokecard/Pokecard";
import './Pokemon.css'

class Pokemon extends Component{
    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <div className={this.props.isWinner?"Winner":"Looser"}>
                <div className="textCenter">
                    <h4>Total Experience: {this.props.exp}</h4>
                </div>
                <div className="textCenter">
                    <h3>{this.props.isWinner?"Winner":"Looser"}</h3>
                </div>
                <div className="flexContainer">
                    {data.map(d=> <Pokecard pokemon={d} /> )}
                </div>
            </div>
        );
    }
}
export default Pokemon;
