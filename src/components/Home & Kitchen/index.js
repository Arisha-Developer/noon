import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import homeKitchen from "../../mock/home&kitchen";

const HomeItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/5a036462-2cb1-4aa6-b200-6ee61b2f3af6.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        homeKitchen.map((item) => (
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
export default HomeItem