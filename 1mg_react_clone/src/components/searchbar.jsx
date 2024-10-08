import React, { useRef, useState } from 'react';
import "../styles/searchbar.css";

export function SearchBar() {
  return (<div id='navsecondbar'>
    <LocationSelector />
    <SearchComp />
    <LightningSymbol/>
    <NavPara/>
    <NavButton/>
  </div>
  );
}




export function LocationSelector() {
  let [location, setLocation] = useState("Location");

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <select onChange={handleLocationChange} id='MenuButtonStyle'>
        <option value="">Top Cities</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Chennai">Chennai</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Pune">Pune</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
    </div>
  );
}

export function SearchComp() {
  return (
    <div id='searchbarbox'>
      <input type="text" placeholder='Search for Medicines and Health Products' id='SearchText' />
      <button><span className="material-symbols-outlined">
        search
      </span></button>
    </div>
  );
}

export function LightningSymbol() {
  return (
    <div id='LightningSymbolstyle'>
      <span className="material-symbols-outlined">
        electric_bolt
      </span>
    </div>
  );
}

export function NavPara(){
  return (
    <div id='NavParaStyle'>
      <div>QUICK BUY! Get 15% off on</div>
      <div>medicines*</div>
    </div>
  );
}

export function NavButton(){
  return (
    <div id='NavButton'>
      <button>Quick order</button>
    </div>
  );
}







