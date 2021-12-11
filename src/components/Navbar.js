import React from "react";
import "../styles/components.css"
import logo from "../images/logo.png"
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logoContainer">
                    <img src={logo} alt="logo"/>
                    <h1>HyperShop</h1>
                </div>
                <ul className="navbar-links">
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;