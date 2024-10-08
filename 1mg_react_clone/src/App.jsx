import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { ProductPage } from './components/productPage';
import { Cart } from './components/cart';
import { Navigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);  
  const isAuth = useSelector((state) => state.isAuth);

  useEffect(() => {
    dispatch({ type: "RESET_STATE" });

    // Fetch User data
    axios.get('https://react-tata1mg-clone-default-rtdb.asia-southeast1.firebasedatabase.app/User.json')
      .then((response) => {
        const users = response.data;
        for (let key in users) {
          dispatch({ type: "ADDUser", payload: users[key] });
          dispatch({ type: "ADDUserID", payload: {UID: key, Udetail: users[key]} });
        }
      })
      .catch((error) => console.error('Error fetching users:', error));

    // Fetch Product data
    axios.get('https://react-tata1mg-clone-default-rtdb.asia-southeast1.firebasedatabase.app/Product.json')
      .then((response) => {
        const products = response.data;
        for (let key in products) {
          dispatch({ type: "AddProduct", payload: products[key] });
        }
      })
      .catch((error) => console.error('Error fetching products:', error));

    // Fetch Cart data
    axios.get('https://react-tata1mg-clone-default-rtdb.asia-southeast1.firebasedatabase.app/Cart.json')
      .then((response) => {
        const carts = response.data;
        for (let key in carts) {
          dispatch({ type: "AddToCart", payload: carts[key] });
        }
      })
      .catch((error) => console.error('Error fetching cart:', error));
  }, [dispatch, isSignedUp, cartUpdated]);  

  const PrivateRoute = ({ children }) => {
    return isAuth ? children : <>
    {alert("You Need To Login To Get Cart Access")}
    <Navigate to="/login" /></>;
  };
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup setIsSignedUp={setIsSignedUp} />} />
        <Route path='/Product/:productName' element={<ProductPage setCartUpdated={setCartUpdated} />} />
        <Route path="/Cart"
          element={
            <PrivateRoute>
              <Cart/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
