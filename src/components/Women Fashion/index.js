import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import fashion from "../../mock/fashion";

const Womfashion = () => {
    return (
        <>
            <div>
                <div className="main_fashion" >
                    {
                        fashion.map((item) => (
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
export default Womfashion