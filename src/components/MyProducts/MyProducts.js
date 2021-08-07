import React, { useEffect, useState } from 'react';
import MySingleProduct from '../MySingleProduct/MySingleProduct';
// import MySidebar from '../MySidebar.js/MySidebar';



const MyProducts = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    // //console.log(user);
    const [myProducts,setMyProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${user.email}` )
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setMyProducts(data)
        })
        
    },[user.email])
    //console.log(myProducts);
    return (
        <div className="container">   
        <div  className="row">
         <div className="col-md-4">
            
            
         </div>
         <div className="col-md-8">
             <h3 className="m-5 text-center "> {user.name}'s Orders</h3>
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>User Name</th> */}
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
               myProducts.map(product => <MySingleProduct key={product._id}  product={product}>{product.productName}</MySingleProduct>)
                    }
                    </tbody>


                </table>
         </div>

        </div>
        </div>   
       
       
    );
};

export default MyProducts;