import P0T1 from "../assets/P0T1.avif";
import P0T2 from "../assets/P0T2.avif";
import P0T3 from "../assets/P0T3.avif";
import P0T4 from "../assets/P0T4.png";
import P0A1 from "../assets/P0A1.png";
import P0A2 from "../assets/P0A2.png";
import P0A3 from "../assets/P0A3.png";
import P0A4 from "../assets/P0A4.png";
import "../styles/productContentStyle.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function ProductContent1({ setCartUpdated }) {
    let [imgActual, setActualImg] = useState(P0A1);
   

    function handleImageChange(imgSrc) {
        setActualImg(imgSrc); 
    }

    return (
        <div id="productParentDiv">
            <ImageSelector>
                <ToggleImage src={P0T1} onClick={() => handleImageChange(P0A1)} />
                <ToggleImage src={P0T2} onClick={() => handleImageChange(P0A2)} />
                <ToggleImage src={P0T3} onClick={() => handleImageChange(P0A3)} />
                <ToggleImage src={P0T4} onClick={() => handleImageChange(P0A4)} />
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

export function ToggleImage({ src, onClick }) {
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
            <div className="prodName"> Miduty Methyl B-12 & Folate Capsule </div>
            <div className="prodSmallText">Midvision Pvt Ltd</div>
            <div className="prodHeader">Product highlights</div>
            <div className="prodBullets">
                <ul>
                    <li>Methyl B12 and folate for energy, brain and heart</li>
                    <li>Manages concerns associated with acidity</li>
                    <li>Balances low iron levels</li>
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
            let Price = 799;
            let Pname = "Miduty Methyl B-12 & Folate Capsule";

            
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
            ₹799
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
