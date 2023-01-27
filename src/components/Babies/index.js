import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import babies from "../../mock/babies";

const BabiesItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/1cc14495-64b6-432c-bdb3-0cc06c95fbcf.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        babies.map((item) => (
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
export default BabiesItem