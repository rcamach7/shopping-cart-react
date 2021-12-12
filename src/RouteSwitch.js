import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    const[totalItems, setTotalItems] = useState(cart.reduce(function(a, b) { return a + b; }, 0));

    function handleAddToCart(name) {
        let indexForCart = pokemonInventory.indexOf(name);
        let totalCart = cart[indexForCart] + 1;

        let newCartValues = cart;
        newCartValues[indexForCart] = totalCart;
        setCart(newCartValues);

        setTotalItems(cart.reduce(function(a, b) { return a + b; }, 0));
    }

    return (
        <BrowserRouter>
            <Navbar totalItems={totalItems}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop inventory={pokemonInventory} prices={prices} cart={cart} handleAddToCart={handleAddToCart} />}/>
                <Route path="/cart" element={<Cart inventory={pokemonInventory} prices={prices} cart={cart} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;