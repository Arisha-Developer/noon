import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import electronic from "../../mock/electronic";

const Electronicitem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/9c0007e1-d472-458d-a10d-ec8c1f095964.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        electronic.map((item) => (
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
export default Electronicitem