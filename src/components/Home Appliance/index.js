import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import homeappliance from "../../mock/homeappliance";

const HomeappItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/08e39c45-fc83-4cd2-9938-7586f148ac01.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        homeappliance.map((item) => (
                            <div className=" electronic-div" key={item}>


                                <img className="electronic_img ms-4" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
                <div>
                    <img className="baby_stroller2 mt-3" src="https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg"></img>
                </div>
                
 </>
)

}
export default HomeappItem