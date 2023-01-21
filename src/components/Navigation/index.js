import React, { useState } from "react"
import "./index.css"
import MenuIcon from '@mui/icons-material/Menu';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className="page-header  ">
                <div className="nav-logo ">
                    {/* <Link to="/"> */}
                        <img className="country-img ms-1" src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="" style={{ width: 129, height: 34 }} className='logo' />
                        {/* </Link> */}
                        <a href="" className="country_icon"><img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg"></img>Deliver To Dubai</a>
                </div>
                <div className='product-search'>
                    <InputGroup className="mb-3 nav-input">
                        <FormControl
                            placeholder="What are you looking for?"
                            aria-label="Search Product"
                            aria-describedby="basic-addon2"
                        />
                        <Button id="button-addon2" className='nav-butn'>
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div className='icon-bar'>

                    {/* <FadeMenu classname="pagenav"  /> */}

                    {/* <MenuIcon className="nav-icons"  /> */}
                   <div className="sign d-flex"><p className="d-flex">Sign In </p><img src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" style={{ width: 30, height: 34 }}></img></div> 
                    <span>|</span>
                    <div className="cart d-flex ms-4"><p>Cart </p><AiOutlineShoppingCart className="nav-icons ms-2 " /></div>
                </div>
                <div className="nav-contact">

                    {/* <BiPhoneCall className='nav-phone' /> */}
                </div>
            </div>
          <nav className="main_nav d-flex">
            <div className="container">
                <a className="link-nav" href="">ELECTRONICS</a>
                <a  className="link-nav" href="">MEN</a>
                <a className="link-nav" href="">WOMEN</a>
                <a className="link-nav" href="">HOME</a>
                <a className="link-nav" href="">BEAUTY & FRAGRANCE</a>
                <a className="link-nav" href="">BABY & TOYS</a>
                <a className="link-nav" href="">SPORTS</a>
                <a className="link-nav" href="">BEST SELLERS</a>
                <a className="link-nav" href="">SELL ON NOON</a>
                <img src="https://z.nooncdn.com/s/app/com/noon/images/en_grocery_logo_gif_v3.gif"style={{width:50,height:10,paddingLeft:20}}></img>
            </div>
          </nav>
          <div>
            <img className="poster_img" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"></img>
          </div>
  </>

    )
}
export default Navigation