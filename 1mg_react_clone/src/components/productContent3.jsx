import P3T1 from "../assets/P3T1.avif";
import P3T2 from "../assets/P3T2.avif";
import P3T3 from "../assets/P3T3.avif";
import P3T4 from "../assets/P3T4.avif";
import P3A1 from "../assets/P3A1.png";
import P3A2 from "../assets/P3A2.png";
import P3A3 from "../assets/P3A3.png";
import P3A4 from "../assets/P3A4.png";
import "../styles/productContentStyle.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function ProductContent3({ setCartUpdated }) {
    let [imgActual, setActualImg] = useState(P3A1);

    function handleImageChange(imgSrc) {
        setActualImg(imgSrc); 
    }

    return (
        <div id="productParentDiv">
            <ImageSelector>
                <ToogleImage src={P3T1} onClick={() => handleImageChange(P3A1)} />
                <ToogleImage src={P3T2} onClick={() => handleImageChange(P3A2)} />
                <ToogleImage src={P3T3} onClick={() => handleImageChange(P3A3)} />
                <ToogleImage src={P3T4} onClick={() => handleImageChange(P3A4)} />
            </ImageSelector>
            <ActualImage src={imgActual} />
            <ProductDescription />
            <ProductPriceDetails setCartUpdated={setCartUpdated} />
        </div>
    );
}

export function ImageSelector({ children }) {
    return (
        <div id="imageSelector">
            {children}
        </div>
    );
}

export function ToogleImage({ src, onClick }) {
    return (
        <div id="toogleImg" onClick={onClick}>
            <img src={src} alt="ToggleImage" />
        </div>
    );
}

export function ActualImage({ src }) {
    return (
        <div id="actualImg">
            <img src={src} alt="ActualImage" />
        </div>
    );
}

export function ProductDescription() {
    return (
        <div id="prodDes">
            <div className="prodName">Healthyr-U Relax & Restore Tablet</div>
            <div className="prodSmallText">Zuventus Healthcare Ltd</div>
            <div className="prodHeader">Product highlights</div>
            <div className="prodBullets">
                <ul>
                    <li>Helps muscle relaxation</li>
                    <li>Supports nervous system</li>
                    <li>Promotes healthy sleep</li>
                    <li>Supports cognitive health</li>
                    <li>Helps boost energy</li>
                    <li>Supports heart and brain health</li>
                </ul>
            </div>
        </div>
    );
}

export function ProductPriceDetails({ setCartUpdated }) {
    let navigate = useNavigate();

    let { productName } = useParams();

    let isAuth = useSelector((state) => state.isAuth);

    function handleAddToCart(){
        if(isAuth){
            let UserID = localStorage.getItem("UID1mg");
            let Price = 749;
            let Pname = "Healthyr-U Relax & Restore Tablet";

            
            alert("Item added to cart successfully!!!");
            let obj = {
                UID: UserID,
                PID: productName,
                ProductPrice: Price,
                ProductName: Pname
            }
            axios.post('https://react-tata1mg-clone-default-rtdb.asia-southeast1.firebasedatabase.app/Cart.json',obj).then((res)=> {

                setCartUpdated(prev => !prev);
            });
        }
        else{
            alert("Unable to Add to Cart - You Need to Login First!!!");
            navigate("/login");
        }
            

    }

    return (
        <div id="prodPriceDetails">
            <div id="prodPriceBullet">
            <span className="material-symbols-outlined">radio_button_checked</span>
            ₹749
            </div>
            <div id="qtyselectdiv">
                <label>QTY </label>
                <select id="selectqty">
                    <option value="1">1 Bottle</option>
                    <option value="2">2 Bottle</option>
                    <option value="3">3 Bottle</option>
                    <option value="4">4 Bottle</option>
                </select>
            </div>
            <div id="buttoncartdiv">
                <button id="addToCartBtn" onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    );
}
