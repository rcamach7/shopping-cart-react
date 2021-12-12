import React from "react";
import "../styles/navbar.css";
import title from "../images/title.png";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="navbar">
                <img className="titleImage" src={title} alt="tito"/>

                <ul className="navbar-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart ({this.props.totalItems})</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Navbar;