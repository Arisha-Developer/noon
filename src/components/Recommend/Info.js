import React, { useState, useLayoutEffect  } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import allProducts from "../../mock/recommend";

const Info = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams();
    useLayoutEffect(() => {
        const data = allProducts.find((item) => item.id === id);
        setProductData(data)
    }, []);
    const { id: p, image, heading, head } = productData;
    return (
        <>
            <div>{image}</div>
            <h3> {head}</h3>
            <h4>{heading}</h4>
            <p>{p}</p>
        </>

    )
}
export default Info