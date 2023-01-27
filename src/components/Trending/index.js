import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import electric from "../../mock/electric";

const Electric=()=>{
return(
    <div className="main_electric">
    <div className="d-flex" >
    {
                    electric.map((item) => (
                        <div className=" electric-div" key={item}>
                                    <img className="electric_img" src={`${window.location.origin}/${item.image}`} alt="" />
                                    <p>{item.p}</p><br></br><br></br>
                                    <h6>{item.price}</h6><br></br>
                                    <h6 className="about"><i>{item.about}</i></h6>
                        
                                </div>
                                
                        ))
                }
    </div>
    <div>
        <img className="noon_img" src="https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif"></img>
    </div>
 </div>
)
}
export default Electric