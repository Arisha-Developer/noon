import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import clearance from "../../mock/clearance";

const Clearance = () => {

    return (
        <>
            <div className="main_clearance ">
                <div className="clearance d-flex mt-4" >
                    {
                        clearance.map((item) => (
                            <div className=" clearance-div" key={item}>
                                <img className="deal_img" src={item.image} alt="" />
                                <p>{item.p}</p><br></br>
                                <h6>{item.price}</h6><br></br>
                                <h6 className="about"><i>{item.about}</i></h6>

                            </div>
                        ))
                    }
                </div>
                <div ><img className="women_fashion" src="https://f.nooncdn.com/mpcms/EN0001/assets/66728f5e-69e2-456f-85ac-e648dba07cb1.png"></img></div>

            </div>
        </>
    )
}
export default Clearance