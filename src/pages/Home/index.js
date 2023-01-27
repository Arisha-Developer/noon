import React, { useState } from "react"
import Card from "../../components/Card"
import Recommend from "../../components/Recommend"
import Deal from "../../components/Deal"
import Electric from "../../components/Trending"
import Clearance from "../../components/Clearance Deals"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fashion from "../../components/Women Fashion"
import Menfashion from "../../components/Men Fashion"
import Kidfashion from "../../components/Kids Fashion"
import Electronicitem from "../../components/Electronics"
import MobileItem from "../../components/Mobile"
import LaptopItem from "../../components/Laptop Accessories"
import BeautyItem from "../../components/Beauty"
import FragranceItem from "../../components/Frangrance"
import HomeItem from "../../components/Home & Kitchen"
import SportItem from "../../components/Sports"
import ToyItem from "../../components/Toys"
import BabiesItem from "../../components/Babies"
import HomeappItem from "../../components/Home Appliance"
// import Footer from "../../components/Footer"


const Home = () => {
    return (
        <div className="main-web">
            <Card />
            <Recommend />
            <Deal />
            <Electric />
            <Clearance />
            <Fashion />
            <Menfashion />
            <Kidfashion />
            <Electronicitem />
            <MobileItem />
            <LaptopItem />
            <BeautyItem />
            <FragranceItem />
            <HomeItem />
            <SportItem />
            <ToyItem />
            <BabiesItem />
            <HomeappItem />
        </div>
    )
}
export default Home