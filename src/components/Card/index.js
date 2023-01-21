import React, { useState } from "react"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import card from '../../mock/card';

const Card = () => {
    return (
        // <div className="card-div">
        //     <div className="container">
        //         <div >
        //             <img className="img_div" src="https://f.nooncdn.com/mpcms/EN0001/assets/95f4a46a-d0b7-4827-b90d-67d7ee62ae29.png" alt=""/>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="main_card" >
                {
                    card.map((index) => (
                        <div className="card-div" key={index}>
                            <div >
                                <img className="img_div" src={`${window.location.origin}/${index.image}`} alt="" />
                            </div>
                        </div>))
                }
            </div>
            <div className="container product_div">
                <div className="row">
                    <div className="col-md-4 ">
                            <h4 className="ms-4 fs-6">More reasons to shop</h4>
                        <div className=" d-flex">
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"></img>
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png"></img><br>
                            
                            </br>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <h4 className="ms-5 fs-6">Mega deals of the day<span>24 hours only</span></h4>
                        <div className="product_img1 d-flex">
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/b744566b-aa4f-4c28-8b19-5bbaaf5cfeb1.png"></img>
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/ca796188-9f8d-4bf1-a080-b06397d70ad5.png"></img>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="ms-4 fs-6">In focus</h4>
                        <img className="product_sell ms-4 " src="https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <div className=" d-flex">
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png"></img>
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png"></img><br>
                            
                            </br>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product_img1 d-flex">
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/b744566b-aa4f-4c28-8b19-5bbaaf5cfeb1.png"></img>
                            <img className="product_img1" src="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png"></img>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="product_sell ms-4 " src="https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png"></img>
                    </div>
                </div>
            </div>
            <div className="recommend_card contai">
            </div>
        </>
    )
}
export default Card