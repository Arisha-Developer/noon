import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import sports from "../../mock/sports";

const SportItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/1ef1c6be-a392-4ee8-a92a-50d9181d1530.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        sports.map((item) => (
                            <div className=" electronic-div" key={item}>


                                <img className="electronic_img ms-4" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
                
 </>
)

}
export default SportItem