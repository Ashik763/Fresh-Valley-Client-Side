import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar.js/Sidebar';

const AddProduct = () => {
    const [product,setProduct] = useState({});
    const history = useHistory();
    const handleSubmit = (p) => {
        p.preventDefault();
       
            fetch('http://localhost:5000/addProduct',{
                method: 'POST',
               headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                alert('you order is added successfully')
                history.replace('/')
            })
        
        

    }
    const handleOnBlur = (p) => {
        const newProduct = product;
        newProduct[p.target.name] = p.target.value;
        setProduct(newProduct);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar/>

                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Add a new event</h3>
                    <form onSubmit={handleSubmit}>
                        <input required onBlur={handleOnBlur} type="text" name="name" placeholder="product name" className="form-control" /><br/>
                        <input className="mt-5 form-control" required onBlur={handleOnBlur} type="text" name="price" placeholder="price"  /><br/>
                        <input className="mt-5 form-control" required onBlur={handleOnBlur} type="text" name="img" placeholder="input image URL"  /><br/>
                        <button className="m-5 btn btn-primary">Add Product</button>
                    </form>
                </div>

            </div>
           
        </div>
    );
};

export default AddProduct;