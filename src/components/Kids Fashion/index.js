import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import kids from "../../mock/kids";

const Kidfashion = () => {
    return (
        <>
        <div>
            <img className="women_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/95237a25-2aba-4c00-9ed2-ae17c06b6d95.png"></img>
        </div>
            <div>
                <div className="main_fashion" >
                    {
                        kids.map((item) => (
                            <div className=" fashion-div" key={item}>


                                <img className="fashion_img" src={item.image} alt="" />


                            </div>

                        ))
                    }
                </div>
                </div>
                <div>
                    <img className="baby_stroller"  src="https://f.nooncdn.com/mpcms/EN0001/assets/6e50943a-e936-495c-873c-86feef76f8f0.png"></img>
                </div>
 </>
)

}
export default Kidfashion