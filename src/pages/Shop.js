import React from "react";
import "../styles/pages.css";
import Navbar from "../components/Navbar";

class Shop extends React.Component {
    render() {
        return (
            <div className="Shop">
                <Navbar/>
                <h1>Shop Here</h1>
            </div>
        );
    }
}

export default Shop;