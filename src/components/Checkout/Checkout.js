import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const [checkoutData, setCheckoutData] = useState({
    userName: user.name,
    email: user.email,
    productName: product.name,
    img: product.img,
    productPrice: product.price,
    // productDescription : product.description
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/addCheckout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkoutData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("you ordered successfully");
        history.replace("/");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())

      .then((data) => {
        // //console.log(data);
        setProduct(data);
        const newCheckoutData = { ...checkoutData };
        newCheckoutData.productName = data.name;
        newCheckoutData.productPrice = data.price;
        newCheckoutData.img = data.img;
        setCheckoutData(newCheckoutData);
      });
  }, []);
  return (
    <div style={{width:"60%",top:"50%",left:"50%"}} className="container ">
         <h2> Checkout</h2>
      <div className="shadow rounded ">
        <form className="" onSubmit={handleSubmit}>
         
          <div className="d-flex justify-content-around pt-3">
            <h2>Product Name: {product.name} </h2>
            <h5>Quantity: 1</h5>

            <h6>price:$ {product.price}</h6>
          </div>
          {/* <Link className="nav-link active" to="/myproducts" ><button className="btn btn-primary"> checkout </button></Link>  */}
          <button className="btn btn-success m-5  ">checkout</button>

        </form>
        <div  className="d-flex justify-content-center">
        </div>
    
      </div>
    </div>
  );
};

export default Checkout;
