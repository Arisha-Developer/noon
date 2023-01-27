import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import laptop from "../../mock/laptop";

const LaptopItem = () => {
    return (
        <>
        <div className="mt-3">
            <img className="electronic_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/ea1accaf-1be8-461c-a8c6-034503d032a5.png"></img>
        </div>
            <div>
                <div className="main_fashion bg-light mt-3" >
                    {
                        laptop.map((item) => (
                            <div className=" electronic-div" key={item}>


                                <img className="electronic_img ms-4" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
                <div>
                    <img className="baby_stroller"  src="https://f.nooncdn.com/mpcms/EN0001/assets/139f8735-8378-436c-a658-9e2f2ea7ebba.gif"></img>
                </div>
                
 </>
)

}
export default LaptopItem