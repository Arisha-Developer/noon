import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import mobile from "../../mock/mobile";
import { useNavigate } from "react-router-dom";
const MobileItem = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/8c27ca61-4a07-4964-88b9-1828e40b7246.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        mobile.map((item) => (
                            <div className=" electronic-div" key={item.id} >


                                <img className="electronic_img ms-4" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
                
 </>
)

}
export default MobileItem