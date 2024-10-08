import P2T1 from "../assets/P2T1.png";
import P2T2 from "../assets/P2T2.avif";
import P2T3 from "../assets/P2T3.avif";
import P2T4 from "../assets/P2T4.avif";
import P2A1 from "../assets/P2A1.png";
import P2A2 from "../assets/P2A2.png";
import P2A3 from "../assets/P2A3.png";
import P2A4 from "../assets/P2A4.png";
import "../styles/productContentStyle.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function ProductContent2({ setCartUpdated }) {
    let [imgActual, setActualImg] = useState(P2A1);

    function handleImageChange(imgSrc) {
        setActualImg(imgSrc); 
    }

    return (
        <div id="productParentDiv">
            <ImageSelector>
                <ToogleImage src={P2T1} onClick={() => handleImageChange(P2A1)} />
                <ToogleImage src={P2T2} onClick={() => handleImageChange(P2A2)} />
                <ToogleImage src={P2T3} onClick={() => handleImageChange(P2A3)} />
                <ToogleImage src={P2T4} onClick={() => handleImageChange(P2A4)} />
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
            <div className="prodName">R3SET Biotin Gummies</div>
            <div className="prodSmallText">Venus Remedies Ltd</div>
            <div className="prodHeader">Product highlights</div>
            <div className="prodBullets">
                <ul>
                    <li>Useful for skin and hair health</li>
                    <li>Supports energy level and overall wellbeing</li>
                    <li>Free from gluten, soy, artificial flavours, and preservatives</li>
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
            let Price = 899;
            let Pname = "R3SET Biotin Gummies";

            
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
            ₹899
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
