
import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css"
//chakra
import { Button } from "@chakra-ui/react";

function Navbar() {
    return (

        <nav className={style.nav} >
            <div className={style.left} >
                <div className="logo" >
                    <Link to="/" > e-commerce </Link>
                </div>
                <ul className={style.menu}>
                    <li>
                        <Link to="/product" >Product</Link>
                    </li>
                </ul>
            </div>
            <div className={style.right} >
                <Link to="/signin" >  <Button colorScheme='blue'>Login</Button> </Link>
                <Link to="/signup" >  <Button colorScheme='blue'>Register</Button> </Link>
                <Link to="/profile" > <Button colorScheme='blue'>profile</Button> </Link>
            </div>

        </nav>

    )
}

export default Navbar;