import React from "react";
import "../styles/Cart.css"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: this.calculatePrice(),
            toPurchase: this.calculateCart(),
        }
    }

    calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
            if (this.props.cart[i] > 0) {
                totalPrice = totalPrice + (this.props.cart[i] * this.props.prices[i]);
            }
        }
        return totalPrice;
    }

    calculateCart() {
        let toPurchaseNew = [];
        for (let i = 0; i < this.props.cart.length; i++) {
            if (this.props.cart[i] > 0) {
                toPurchaseNew.push(this.props.inventory[i] + " : " + this.props.cart[i] + " @$" + this.props.prices[i] + " each");
            }
        }
        return toPurchaseNew;
    }

    render() {
        return (
            <div className="cart">
                <div className="checkoutContainer">
                    <CheckoutBox totalPrice={this.state.totalPrice} toPurchase={this.state.toPurchase}/>
                </div>
            </div>
        );
    }
}

function CheckoutBox(props) {
    return (
        <div className="checkoutBox">
            <h1>My Cart</h1>
            <div className="toPurchaseContainer">
                <ol>
                    {props.toPurchase.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ol>
            </div>
            <h2>Total Price ${props.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
            <button onClick={() => alert("Thank You For Your Purchase")}>Purchase</button>
        </div>
    )
}

export default Cart;