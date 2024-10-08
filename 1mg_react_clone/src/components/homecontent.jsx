import "../styles/homecontent.css";
import HomePageImg8 from "../assets/HomePageImg8.png";
import HealthImg1 from "../assets/HealthImg1.png";
import HealthImg2 from "../assets/HealthImg2.png";
import HealthImg3 from "../assets/HealthImg3.png";
import HealthImg4 from "../assets/HealthImg4.png";
import HealthImg5 from "../assets/HealthImg5.png";
import HealthImg6 from "../assets/HealthImg6.png";
import HealthImg7 from "../assets/HealthImg7.png";
import BrandImg1 from "../assets/BrandImg1.avif";
import BrandImg2 from "../assets/BrandImg2.avif";
import BrandImg3 from "../assets/BrandImg3.avif";
import BrandImg4 from "../assets/BrandImg4.avif";
import BrandImg5 from "../assets/BrandImg5.avif";
import BrandImg6 from "../assets/BrandImg6.avif";
import BrandImg7 from "../assets/BrandImg7.avif";
import PCare1 from "../assets/PCare1.png";
import PCare2 from "../assets/PCare2.png";
import PCare3 from "../assets/PCare3.png";
import PCare4 from "../assets/PCare4.png";
import PCare5 from "../assets/PCare5.png";
import PCare6 from "../assets/PCare6.png";
import PCare7 from "../assets/PCare7.png";
import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.avif";
import Product6 from "../assets/Product6.png";
import Product7 from "../assets/Product7.png";

import { Link } from "react-router-dom";

export function HomeContent(){
    return (
        <div>
            <Content1/>
            <Content2/>
            <Content3>Shop By Health Concerns</Content3>
            <Block1/>
            <Content3>Featured Brands</Content3>
            <Block2/>
            <Content3>Personal Care</Content3>
            <Block3/>
            <Content3>Collagen | supplement of the week</Content3>
            <Block4/>
            <div id="Empty"/>
            <ContentHomeBottom/>
        </div>
    );
}


export function Content1(){
    return (
        <div id="content1">
            Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </div>
    );
}

export function Content2(){
    return (
        <div id="content2">
            <img src={HomePageImg8} />
        </div>
    );
}

export function Content3({children}){
    return (
        <div id="content3">
            {children}
        </div>
    );
}


export function Block1(){
    return (
        <>
            <Content4>
                <SingleItem>
                    <ProdImg src={HealthImg1} />
                    <ProdDes>Diabetes</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg2} />
                    <ProdDes>Heart Care</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg3} />
                    <ProdDes>Stomach Care</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg4} />
                    <ProdDes>Liver Care</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg5} />
                    <ProdDes>Bone, Joint & Muscle Care</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg6} />
                    <ProdDes>Kidney Care</ProdDes>
                </SingleItem>
                <SingleItem>
                    <ProdImg src={HealthImg7} />
                    <ProdDes>Derma Care</ProdDes>
                </SingleItem>
            </Content4>
        </>
    );
}

export function Block2(){
    return (
        <>
            <Content4>
                <SingleItem>
                    <ProdImg src={BrandImg1} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg2} />
        
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg3} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg4} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg5} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg6} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={BrandImg7} />
                </SingleItem>
            </Content4>
        </>
    );
}

export function Block3(){
    return (
        <>
            <Content4>
                <SingleItem>
                    <ProdImg src={PCare1} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare2} />
        
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare3} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare4} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare5} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare6} />
                </SingleItem>
                <SingleItem>
                    <ProdImg src={PCare7} />
                </SingleItem>
            </Content4>
        </>
    );
}



export function Block4(){
    return (
        <>
            <Content4>
            <Link to="/Product/Prod1">
                <SingleItem2>
                    <ProdImg2 src={Product1} />
                    <ProductTitle>Miduty Methyl B-12 & Folate Capsule</ProductTitle>
                    <ProductDetail>bottle of 60 capsules</ProductDetail>
                    <ProductPrice>MRP ₹799 </ProductPrice>
                </SingleItem2>
            </Link>
            <Link to="/Product/Prod2">
                <SingleItem2>
                    <ProdImg2 src={Product2} />
                    <ProductTitle>R3SET Biotin Gummies</ProductTitle>
                    <ProductDetail>box of 60 gummies</ProductDetail>
                    <ProductPrice>MRP ₹899 </ProductPrice>
                </SingleItem2>
            </Link>
            <Link to="/Product/Prod3">
            <SingleItem2>
                    <ProdImg2 src={Product3} />
                    <ProductTitle>Healthyr-U Relax & Restore Tablet</ProductTitle>
                    <ProductDetail>bottle of 60 tablets</ProductDetail>
                    <ProductPrice>MRP ₹749 </ProductPrice>
                </SingleItem2>
            </Link>
                <SingleItem2>
                    <ProdImg2 src={Product4} />
                    <ProductTitle>SWISSLIFE FOREVER  Chelated Magnesium Glycinate Tablet (120 Each)</ProductTitle>
                    <ProductDetail>box of 1 Bottle</ProductDetail>
                    <ProductPrice>MRP ₹699 </ProductPrice>
                </SingleItem2>
                <SingleItem2>
                    <ProdImg2 src={Product5} />
                    <ProductTitle>Arth Embrace Menopause Bone Health Support Tablet Gluten Free</ProductTitle>
                    <ProductDetail>bottle of 60 tablets</ProductDetail>
                    <ProductPrice>MRP ₹300 </ProductPrice>
                </SingleItem2>
                <SingleItem2>
                    <ProdImg2 src={Product6} />
                    <ProductTitle>Miduty Kids Calcium Chewable</ProductTitle>
                    <ProductDetail>bottle of 60 Chewable Tablets</ProductDetail>
                    <ProductPrice>MRP ₹799 </ProductPrice>
                </SingleItem2>
                <SingleItem2>
                    <ProdImg2 src={Product7} />
                    <ProductTitle>Nutranext Vitamin B12 (Methycobalamin) Tablet for Brain, Heart & Nervous System Strawberry</ProductTitle>
                    <ProductDetail>bottle of 60 tablet md</ProductDetail>
                    <ProductPrice>MRP ₹429 </ProductPrice>
                </SingleItem2>
            </Content4>
        </>
    );
}

export function Content4({children}){
    return (
        <div id="content4">
            {children}
        </div>
    );
}

export function SingleItem({children}){
    return (
        <div id="singleItem1">
           {children}
        </div>
    );
}

export function SingleItem2({children}){
    return (
        <div id="singleItem2">
           {children}
        </div>
    );
}

export function ProdImg({src}){ 
    return (
        <div id="ProdImg1">
           <img src={src} alt="Health Image" />
        </div>
    );
}

export function ProdImg2({src}){ 
    return (
        <div id="ProdImg3">
           <img src={src} alt="Health Image" />
        </div>
    );
}

export function ProdDes({children}){
    return (
        <div id="ProdDes1">
           {children}
        </div>
    );
}

export function ProductTitle({children}){
    return (
        <div id="ProdTitle1">
           {children}
        </div>
    );
}

export function ProductDetail({children}){
    return (
        <div id="ProdDetail1">
           {children}
        </div>
    );
}


export function ProductPrice({children}){
    return (
        <div id="ProdPrice1">
           {children}
        </div>
    );
}



export function ContentHomeBottom(){
    return (
        <div id="contentBottom">
            <BoldText>Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</BoldText>
            <BoldText1>We Bring Care to Health.</BoldText1>
            <NormalText>Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.</NormalText>
            <BoldText1>Tata 1mg: Your Favourite Online Pharmacy!</BoldText1>
            <NormalText>Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.</NormalText>
            <NormalText>With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.</NormalText>
            <NormalText>In case you need assistance, just give us a call and we will help you complete your order.</NormalText>
            <NormalText>And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.</NormalText>
            <NormalText>Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.</NormalText>
            <BoldText1>The Feathers in Our Cap</BoldText1>
            <NormalText>At Tata 1mg, our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like<b> BML Munjal Award for 'Business Excellence through Learning and Development',</b><b> Best Online Pharmacy in India Award</b> and <b>Top 50 venture in The Smart CEO-Startup50 India.</b> We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.</NormalText>
            <BoldText1>The Services We Offer</BoldText1>
            <NormalText>Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.</NormalText>
            <NormalText>We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.</NormalText>
            <NormalText>Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</NormalText>
            <NormalText>We’ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.</NormalText>
            <NormalText>Visit our online medical store now, and avail online medicine purchase at a discount.</NormalText>
            <NormalText>Stay Healthy!</NormalText>
        </div>
    );
}

export function BoldText({children}){
    return (
        <div id="boldText">
            {children}
        </div>
    );
}

export function BoldText1({children}){
    return (
        <div id="boldText1">
            {children}
        </div>
    );
}

export function NormalText({children}){
    return (
        <div id="normalText">
            {children}
        </div>
    );
}
