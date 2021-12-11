import React from "react";
import "../styles/components.css"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <h2>Logo</h2>
                <ul className="navbar-links">
                    <li>Shop</li>
                    <li>Home</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;