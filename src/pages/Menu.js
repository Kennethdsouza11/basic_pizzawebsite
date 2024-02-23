import React from "react";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";
//if we are importing a variable from another file wrap it around curly brackets

function Menu(){
    return (
        <div className = "menu">
            <h1 className = "menuTitle">Our Menu</h1>
            <div className = "menuList">
                {MenuList.map((menuItem, key) => {
                    return (
                    <MenuItem 
                        key = {key}
                        image = {menuItem.image} 
                        name= {menuItem.name} 
                        price = {menuItem.price}/>
                    );
            })}
            </div>
        </div>
    );
}

export default Menu;

