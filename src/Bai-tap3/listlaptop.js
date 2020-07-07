import React from "react";
import Itemlaptop from "./itemlaptop";
export default function Listlaptop() {
    return (
        <div id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
            <h1 className="text-center">BEST LAPTOP</h1>
            <div className="row">
            <Itemlaptop/>
            <Itemlaptop/>
            <Itemlaptop/>
            <Itemlaptop/>
            </div>
        </div>
    );
}