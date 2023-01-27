import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import toys from "../../mock/toys";

const ToyItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/e3083d03-7a0a-48de-a753-81b0668efa8a.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        toys.map((item) => (
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
export default ToyItem