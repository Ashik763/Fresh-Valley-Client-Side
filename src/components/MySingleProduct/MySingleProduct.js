import React from "react";
import { useHistory } from "react-router";

const MySingleProduct = (props) => {
  const product = props.product;
  const { _id, userName, productName, img,productPrice } = product;
  const history = useHistory();
  const handleDelete = () => {
    fetch(`http://localhost:5000/deleteCheckout/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("your product is successfully deleted");
        history.replace("/");
      });
  };

  return (
    <tr>
    {/* <td>{userName}</td> */}
    <td>{productName}</td>

    <td>{productPrice}</td>
    <td><button onClick={handleDelete} className=" btn btn-danger">delete</button></td>



    </tr>
  );
};

export default MySingleProduct;
