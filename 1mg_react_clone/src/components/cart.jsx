import { Footer } from './footer';
import { Navbar } from './navbar'
import { SearchBar } from './searchbar'
import React, { useState } from "react";
import "../styles/cartPage.css";
import { useSelector } from "react-redux";
import P0A1 from "../assets/P0A1.png";
import P2A1 from "../assets/P2A1.png";

import P3A1 from "../assets/P3A1.png";

export function Cart() {

    return (
        <>
            <Navbar />
            <SearchBar />
            <CartContent />
            <Footer />
        </>
    );
}


export function CartContent() {
    let isAuth = useSelector((state) => state.isAuth);
    let CartItems = useSelector((state) => state.Cart);

    let currentCart = [];
    if (isAuth) {
        let UserID = localStorage.getItem("UID1mg");
        currentCart = CartItems.filter((ele) => ele.UID === UserID);
    }

    const cartItems = currentCart.length;

    // let obj = {
    //     UID: UserID,
    //     PID: productName,
    //     ProductPrice: Price,
    //     ProductName: Pname
    // }

    const totalPrice = currentCart.reduce((acc, item) => acc + item.ProductPrice, 0);
    return (
        <div id='CartParent'>
            <div id='ProdDescription'>
                {currentCart.map((item, index) => (
                    <div key={index} className='IndividualProduct'>
                        <div className='ProductImg'>
                            {item.PID === "Prod1" ? (
                                <img src={P0A1} />
                            ) : item.PID === "Prod2" ? (
                                <img src={P2A1} />
                            ) : (
                                <img src={P3A1} />
                            )}
                        </div>
                        <div className='ProductTitleAndHighlight'>
                            <div className='ProductTitle'>{item.ProductName}</div>
                            <div className='ProductHighLight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsam, cupiditate, quo odio accusamus, dolores et qui eaque deleniti ducimus incidunt corporis voluptas aspernatur? Possimus.</div>
                        </div>
                        <div className='ProductPrice'><b>MRP ₹</b>{item.ProductPrice}</div>
                    </div>
                ))}
            </div>
            <div id='PrductBilling'>
                <div id='ProductBoldText'>Total: ₹{totalPrice}</div>
                <div id="PlaceOrder"><button>Place Order</button></div>
            </div>
        </div>
    );
}