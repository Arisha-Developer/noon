import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import deal from "../../mock/deal";

const Deal = () => {

    return (
        <>
        <div className="main_deal1">
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/db425a54-966f-4a5c-99ae-83bd394fae71.gif"/>
            <div className="main_deal" >
                {
                    deal.map((item) => (
                        <div className=" deal-div" key={item}>
                                    <img className="deal_img" src={`${window.location.origin}/${item.image}`} alt="" />
                        
                                </div>
                        ))
                }
            </div>
           
            </div>
            <div className="mt-4 mx-2 me-2">
                <img src="https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-sfu-01.1674463303.3637538.png"></img>
            </div>
            <div className="noon-card mt-4 ">
                <img className="noon-card" src="https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg"></img>
            </div>
        </>
    )


}
export default Deal;