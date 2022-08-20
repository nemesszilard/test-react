import React, { Component } from "react";

class Character extends Component {
    state = {
        name: null,
        image: null
    }
    render(){
        return(
            <div>
                {this.state.name && <div>
                <h2>{this.state.name}</h2>
                <img src={this.state.image} alt="Char"></img>
                    </div>}
                
            </div>
        );
    }
}

export default Character;