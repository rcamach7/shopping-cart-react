import React from "react";
import "../styles/home.css";
import Showcase from "../images/showcase.png";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="mainContainer">
                    <MainSeller/>
                </div>
            </div>
        );
    }
}

function MainSeller(props) {
    return (
        <div className="mainSeller">
            <h3>Purchase Some Of The Worlds Most Rare Pokemons!</h3>
            <img src={Showcase} alt="showcase"/>
            <p>Our pokemons are treated humanely, caught in the wild and kept in
                open areas free to roam and provided with the best medical care known to man.
            </p>
            <div className="shopCollection">
                <Link to="/shop">
                    <p>Shop Our Collection Now</p>
                </Link>
            </div>
        </div>
    )
}

export default Home;