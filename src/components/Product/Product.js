import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
   
    const product = props.product;
    const { _id ,name,img,description,price} = product;



    return (
        <div className="col-md-3 mb-3">
            
            <div className="m-2 shadow rounded p-3 h-100">
                <img className="img-fluid" src={img} alt=""/>
                <h5 className="text-dark text-center">{name}</h5>
                <div className="d-flex justify-content-between">
                 <b className="display-7"> Price:$ {price} </b>     <Link to ={`/checkout/${_id}`}> <button  className="btn btn-info"> Buy Now</button></Link>
                
                </div> 
                
               

            </div>
           
       
           
        </div>
    );
};

export default Product;