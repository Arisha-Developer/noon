import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import recommend from "../../mock/recommend";
import { useNavigate } from "react-router-dom";
import Info from "../Recommend/Info"

const Recommend = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="main_product d-flex" >
                {
                    recommend.map((item) => (
                        <div className=" recommend-div" key={item} onClick={() => navigate(`./Info/${item.id}`)}>
                                    <img className="product_div" src={`${window.location.origin}/${item.image}`} alt="" />
                                    <p>{item.p}</p><br></br>
                                    <h6>{item.heading}</h6><br></br>
                                    <h6>{item.head}</h6>
                                </div>
                        ))
                }
            </div>
        </>
    )


}
export default Recommend;