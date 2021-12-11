import React from "react";
import "../styles/pages.css";
import Navbar from "../components/Navbar";

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <Navbar/>
            </div>
        );
    }
}


export default Home;