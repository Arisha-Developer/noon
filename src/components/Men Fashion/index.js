import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import men from "../../mock/men";

const Menfashion = () => {
    return (
        <>
        <div>
            <img className="women_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/be245048-2458-4679-bc50-ffcee370b5a6.png"></img>
        </div>
            <div>
                <div className="main_fashion" >
                    {
                        men.map((item) => (
                            <div className=" fashion-div" key={item}>


                                <img className="fashion_img" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
 </>
)

}
export default Menfashion