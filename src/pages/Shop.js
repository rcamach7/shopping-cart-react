import React from "react";
import "../styles/shop.css";
import Navbar from "../components/Navbar";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonInventory: [
                "pikachu",
                "charizard",
                "zapdos",
                "mewtwo",
                "lugia",
                "kyogre",
                "raikou",
                "umbreon",
                "rayquaza",
                "gengar"
            ],
            pokemons: [],
            prices: [
                499999,
                699999,
                1000000,
                1500000,
                1000000,
                1000000,
                1000000,
                1000000,
                1000000,
                199
            ],
            cart: Array(10).fill(0),
        }
    }

    componentDidMount() {
        // As long as page isn't reloaded, we keep our same keys/pokemons
        for (let i = 0; i < this.state.pokemonInventory.length; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonInventory[i];
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.generatePokemon(result, i);
                    }
                )
        }
    }

    generatePokemon(pokemon, priceIndex) {
        const attacks = this.generateMoves(pokemon.moves.length, pokemon.moves);
        const newPokemon = <Pokemon imageSource={pokemon.sprites.other['official-artwork'].front_default}
                                    name={pokemon.name} key={pokemon.id}
                                    attacks={attacks}
                                    price={this.state.prices[priceIndex]}
                                    onClick={() => this.handleAddToCart(pokemon.name)}/>
        let newCollection = this.state.pokemons;
        newCollection.push(newPokemon);
        this.setState({
            pokemons: newCollection,
        });
    }

    handleAddToCart(name) {
        let indexForCart = this.state.pokemonInventory.indexOf(name);
        let totalCart = this.state.cart[indexForCart] + 1;

        let newCartValues = this.state.cart;
        newCartValues[indexForCart] = totalCart;
        this.setState({
            cart: newCartValues,
        })
    }

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
                <Navbar/>
                <div className="mainContainerShop">
                    {this.state.pokemons}
                </div>
            </div>
        );
    }
}

function Pokemon(props) {
    return (
        <div className="pokemon">
            <p>{props.name.toUpperCase()}</p>
            <img src={props.imageSource} alt="pokemon"/>
            <p className="price">${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            {/*TODO: Fix move retrieval - is crashing app*/}
            <div className="attacks">
                <label htmlFor="cars">View All Moves:</label>
                <select>
                    {props.attacks.map((move, index) => {
                        return (
                            <option key={index}>{move}</option>
                        );
                    })}
                </select>
                <div>
                    <button onClick={props.onClick} className="addToCart">Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Shop;