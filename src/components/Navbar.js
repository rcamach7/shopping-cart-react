import React from "react";
import "../styles/components.css";
import title from "../images/title.png";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <img className="titleImage" src={title} alt="tito"/>

                <ul className="navbar-links">
                    <Link to="/shop">
                        <li className="ll">Shop</li>
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