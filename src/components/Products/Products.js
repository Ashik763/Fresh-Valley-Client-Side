import React, { useEffect, useState } from 'react';
// import fakeData from '../../components/fakeData/fakeData.json'
import Product from '../Product/Product';

const Products = () => {
    
    // const addAllProducts = () => {
    //     fetch('http://localhost:5000/addProducts',{
    //         method: 'POST',
    //        headers:{'Content-Type': 'application/json'},
    //        body:JSON.stringify(fakeData)
    //     })
    //     .then(res => res.json())
    //     .then(data => //console.log(data))
    // }


 const [productData,setProductData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProductData(data))
    },[])
    return (
        <div className="row">
            {/* <button onClick={addAllProducts}>Add All </button> */}
           {
               productData.map(p => <Product product={p}></Product> )
           }
        </div>
    );
};

export default Products;   