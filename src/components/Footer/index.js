import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { DisabledByDefault } from "@mui/icons-material";
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineFacebook } from "react-icons/ai";


const Footer = () => {

    return (


        <div className="container">
            <div className="row mt-4">
                <div className="col-lg-2 ">
                    <h6>ELECTRONICS</h6>
                    <p>Mobiles</p>
                    <p>Tablets</p>
                    <p>Laptops</p>
                    <p>Home Appliances</p>
                    <p>Camera,Photo & Video</p>
                    <p>Televisions</p>
                    <p>Headphones</p>
                    <p>Video Games</p>
                </div>
                <div className="col-lg-2">
                    <h6>FASHION</h6>
                    <p>Women's Fashion</p>
                    <p>Men's Fashion</p>
                    <p>Girl's Fashion</p>
                    <p>Boy's Fashion</p>
                    <p>Watches</p>
                    <p>Jwellery</p>
                    <p>Handbags</p>
                    <p>Men's Eyewear</p>
                </div>
                <div className="col-lg-2">
                    <h6>HOME & KITCHEN</h6>
                    <p>Bath</p>
                    <p>Home Decor</p>
                    <p>Kitchen& Dining</p>
                    <p>Tools & Home Improvement</p>
                    <p>Audio & Video</p>
                    <p>Furniture</p>
                    <p>Patlo Lawn & Garden</p>
                </div>
                <div className="col-lg-2">
                    <h6> BABY & TOYS</h6>
                    <p>Diapering</p>
                    <p>Baby Transport</p>
                    <p>Nursing & Feeding</p>
                    <p>Baby & Kids Fashion</p>
                    <p>Baby & Toddler Toys</p>
                    <p>Tricycles & Scooters</p>
                    <p>Board Games & Cards</p>
                    <p>Outdoor Plays </p>
                </div>
                <div className="col-lg-2">
                    <h6>ELECTRONICS</h6>
                    <p>Mobiles</p>
                    <p>Tablets</p>
                    <p>Laptops</p>
                    <p>Home Appliances</p>
                    <p>Camera,Photo & Video</p>
                    <p>Televisions</p>
                    <p>Headphones</p>
                    <p>Video Games</p>
                </div>
                <div className="col-lg-2">
                    <h6>DAILY GROCESSORIES</h6>
                    <p>Mobiles</p>
                    <p>Tablets</p>
                    <p>Laptops</p>
                    <p>Home Appliances</p>
                    <p>Camera,Photo & Video</p>
                    <p>Televisions</p>
                    <p>Headphones</p>
                    <p>Video Games</p>
                </div>
            </div>
            <div className="container">
              <div className="shop">
                <h6 className="mt-6 fs-6">SHOP ON THE GO</h6>
                <span><img src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg"></img><img src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg"></img></span>
              </div>
              <div className="apps">

               <AiOutlineFacebook className="icons"/>
               <AiFillTwitterCircle className="icons"/>
               <AiFillInstagram className="icons"/>
               <AiFillLinkedin className="icons"/>

              </div>
            </div>
        </div>
    )
}
export default Footer