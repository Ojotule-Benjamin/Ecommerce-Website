import React from "react";
import { ShoppingBag } from '@mui/icons-material'
import './topbar.css'


const Topbar = () => {
    return(
        <div>
            <section id="header">
                <a href="image.html"><img src="/img/logo.png" className="logo" alt="" /></a>
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="cart.html"><ShoppingBag/></a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
export default Topbar

