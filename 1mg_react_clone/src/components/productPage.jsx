import { useParams } from "react-router-dom";
import { Navbar } from './navbar';
import { SearchBar } from './searchbar';
import { Footer } from './footer';
import { ProductContent1 } from "./productContent1";
import { ProductContent2 } from "./productContent2";
import { ProductContent3 } from "./productContent3";

export function ProductPage({ setCartUpdated }) { 
    let { productName } = useParams();

    return (
        <div>
            <Navbar />
            <SearchBar />
            {productName === "Prod1" ? (
                <ProductContent1 setCartUpdated={setCartUpdated} />
            ) : productName === "Prod2" ? (
                <ProductContent2 setCartUpdated={setCartUpdated} />
            ) : (
                <ProductContent3 setCartUpdated={setCartUpdated} />
            )}
            <Footer />
        </div>
    );
}
