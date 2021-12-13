import React from "react";
import "../styles/Cart.css"

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                {/* We pass all our information here to be rendered to our page.*/}
                <div className="checkoutContainer">
                    <CheckoutBox totalPrice={this.props.totalPrice}
                                 cartContents={this.props.cartContents}
                                 handleModifyCart={this.props.handleModifyCart}/>
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
                    {/*This displays the pokemon, quantity and a button to increase or decrease purchase quantity.*/}
                    {props.cartContents.map((item, index) => {
                        return <li key={index}>{item}:
                            {/*Reduce cart by one button*/}
                            <button
                                onClick={() => props.handleModifyCart(item.substring(0, item.indexOf(" ")), "-")}>-
                            </button>

                            {/*Increase cart by one button*/}
                            <button
                                onClick={() => props.handleModifyCart(item.substring(0, item.indexOf(" ")), "+")}>+
                            </button>
                        </li>
                    })}
                </ol>
            </div>

            {/*Formats the total price integer*/}
            <h2>Total Price ${props.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>

            {/*Final Purchase button - not to be implemented.*/}
            <button className="purchaseButton"
                    onClick={() => alert("Thank You For Your Purchase")}>
                Purchase
            </button>
        </div>
    )
}

export default Cart;