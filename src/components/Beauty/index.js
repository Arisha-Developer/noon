import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import beauty from "../../mock/beauty";

const BeautyItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/09f57378-1f7d-49de-89db-7841aa76aa67.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        beauty.map((item) => (
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
export default BeautyItem