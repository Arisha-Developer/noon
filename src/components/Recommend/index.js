import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import recommend from "../../mock/recommend";

const Recommend = () => {

    return (
        <>
            <div className="main_product d-flex" >
                {
                    recommend.map((item) => (
                        <div className=" recommend-div" key={item}>
                                    <img className="product_div" src={`${window.location.origin}/${item.image}`} alt="" />
                                    <p>iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version</p><br></br>
                                    <h6>AED 52750.00</h6><br></br>
                                    <h6>express</h6>
                                </div>
                        ))
                }
            </div>
        </>
    )


}
export default Recommend;