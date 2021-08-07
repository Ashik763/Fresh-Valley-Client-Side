import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar.js/Sidebar';
import SingleCheckout from '../SingleCheckout/SingleCheckout';

const AllProducts = () => {

    const [checkout,setCheckout] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setCheckout(data))
    },[])

    return (
    //  <div style={{border: '1px solid red'}} className="container">   
        <div className=" d-flex justify-content-between ">
         <div  style={{height: '100vh' ,backgroundColor:'#F0F8FF'}} className="col-md-3">
            <Sidebar></Sidebar>

         </div>
         <div className="col-md-1"> 
         </div>

         <div className="col-md-7">
             <h3 className="m-5 text-center "> All Orders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            checkout.map(check => <SingleCheckout  check = {check}></SingleCheckout>)
                        }
                    </tbody>


                </table>
         </div>

        </div>
        // </div>   
    );
};

export default AllProducts;