import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import {useState} from "react";

function RouteSwitch() {
    const [pokemonInventory] = useState([
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
    ]);
    const [prices] = useState([
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
    ]);
    const [cart, setCart] = useState(Array(10).fill(0));
    // This is for the navbar - fot it to display total number of items in cart.
    const [totalItems, setTotalItems] = useState(cart.reduce(function (a, b) {
        return a + b;
    }, 0));
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartContents, setCartContents] = useState([]);

    // Formats the items added to cart for readability for the user.
    function formatCartContents() {
        let newCartContents = [];
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] > 0) {
                newCartContents.push(pokemonInventory[i] + " x" + cart[i] + " (" + "$" + prices[i] + " each)");
            }
        }
        setCartContents(newCartContents);
    }

    // Calculate Price - triggered whenever there is an adjustment of cart.
    function calculatePrice() {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i] > 0) {
                totalPrice = totalPrice + (cart[i] * prices[i]);
            }
        }
        setTotalPrice(totalPrice);
    }

    function handleModifyCart(name, mod) {
        let indexForCart = pokemonInventory.indexOf(name);
        let totalCart = cart[indexForCart];

        if (mod === "+") {
            totalCart = totalCart + 1;
            let newCartValues = cart;
            newCartValues[indexForCart] = totalCart;
            setCart(newCartValues);
        } else if (mod === "-") {
            if (totalCart > 0) {
                totalCart = totalCart - 1;
                let newCartValues = cart;
                newCartValues[indexForCart] = totalCart;
                setCart(newCartValues);
            }
        }
        // This updates the total number of items in the cart to update the navbar by summing all added to cart quantity
        setTotalItems(cart.reduce(function (a, b) {
            return a + b;
        }, 0));

        // Call function to re-calculate cost and cart contents
        calculatePrice();
        formatCartContents();
    }

    return (
        <BrowserRouter>
            <Navbar totalItems={totalItems}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop pokemonInventory={pokemonInventory}
                                                   prices={prices}
                                                   cart={cart}
                                                   handleModifyCart={handleModifyCart}/>}/>
                <Route path="/cart" element={<Cart pokemonInventory={pokemonInventory}
                                                   prices={prices}
                                                   cart={cart}
                                                   handleModifyCart={handleModifyCart}
                                                   totalPrice={totalPrice}
                                                   cartContents={cartContents} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;