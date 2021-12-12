import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Cart.css"

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cart">
                <Navbar/>
                <div className="checkoutContainer">
                    <CheckoutBox/>
                </div>
            </div>
        );
    }
}

function CheckoutBox() {
    return (
        <div className="checkoutBox">
            <h1>My Cart</h1>

        </div>
    )
}

export default Cart;