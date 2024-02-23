import React, { useState } from 'react'; //React Native runs on React am open source library for building UI with js
import Logo from '../assets/images/pizzaLogo.png'; //.. means to go back two folders and Logo is the name given to this import statement
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

function Navbar(){
    //useState to tell when to show the hidden contents in the menu and when not. If useState is false then dont show if its true then show
    //openLinks is the name of the useState
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    };
    return (
        //className is used to return the value of the element's class attribute
        <div className = "navbar"> 
            <div className = "leftSide" id = {openLinks ? "open" : "close"}>
                <img src = {Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className = "rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Button onClick = {toggleNavbar}>
                    <MenuIcon />
                </Button>
            </div>
        </div>
    );
}

export default Navbar; //export default specifies that Navbar is the main component in this File.