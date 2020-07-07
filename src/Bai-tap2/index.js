import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Whatwedo from "./whatwedo";
import Contact from "./contact";
import Listcard from "./listcard";
import Footer from "./footer";

export default function Baitap2(){
    return (
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
            <div className="row">
            <Whatwedo/>
            <Contact/>
            </div>
            </div>
            <Listcard/>
            <Footer/>
        </div>
    );
}