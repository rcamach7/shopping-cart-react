import React from "react";
import "../styles/shop.css";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
        }
    }

    // Makes API call for pokemon information to create the pokemon components.
    componentDidMount() {
        for (let i = 0; i < this.props.pokemonInventory.length; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + this.props.pokemonInventory[i];
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.generatePokemon(result, i);
                    }
                )
        }
    }

    // This will be called X amount of times by our API calls for generating pokemon.
    generatePokemon(pokemon, priceIndex) {
        // Generates an array of all the moves this moves has
        const attacks = this.generateMoves(pokemon.moves.length, pokemon.moves);

        // This finally generates the component with all relevant information.
        const newPokemon = <Pokemon imageSource={pokemon.sprites.other['official-artwork'].front_default}
                                    name={pokemon.name}
                                    key={pokemon.id}
                                    attacks={attacks}
                                    price={this.props.prices[priceIndex]}
                                    onClick={() => this.props.handleModifyCart(pokemon.name, "+")}/>

        // This adds the pokemon to a new collection (copy of the old), and then sets it as the current state.
        let newCollection = this.state.pokemons;
        newCollection.push(newPokemon);

        // Update state with current + new pokemon
        this.setState({
            pokemons: newCollection,
        });
    }

    // Helper function for generatePokemon to create a collection of pokemon moves based on the API response.
    generateMoves(numMoves, moves) {
        let listOfMoves = []
        for (let i = 0; i < 25; i++) {
            let key = (Math.floor(Math.random() * numMoves));
            listOfMoves.push(moves[key].move.name);
        }
        return listOfMoves;
    }

    render() {
        return (
            <div className="Shop">
                <div className="mainContainerShop">
                    {this.state.pokemons}
                </div>
            </div>
        );
    }
}

// This is the component used to generate a pokemon card given its specific attributes from our API response.
function Pokemon(props) {
    return (
        <div className="pokemon">
            {/*Pokemon Name*/}
            <p>{props.name.toUpperCase()}</p>

            {/*Pokemon Picture*/}
            <img src={props.imageSource} alt="pokemon"/>

            {/*Pokemon Price*/}
            <p className="price">${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

            {/*Container For Attacks*/}
            <div className="attacks">
                <label htmlFor="cars">View All Moves:</label>
                <select>
                    {props.attacks.map((move, index) => {
                        return (
                            <option key={index}>{move}</option>
                        );
                    })}
                </select>
            </div>

            {/*Add to cart - with methods passed from parent.*/}
            <button onClick={props.onClick} className="addToCart">Add To Cart</button>


        </div>
    )
}

export default Shop;