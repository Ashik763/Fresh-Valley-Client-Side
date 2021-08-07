import React, { useState } from 'react';
import { useHistory } from 'react-router';

const SingleCheckout = (props) => {
    const check = props.check;
    const {_id,userName,productName,productPrice} = check;
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:5000/deleteCheckout/${_id}`,{
            method: 'DELETE',

        })
        .then(res => res.json())
        .then(data =>{
            alert('your registration is successfully deleted');
            history.replace('/');
        });

    }

    return (
       
            
        <tr>
        <td>{userName}</td>
        <td>{productName}</td>

        <td>{productPrice}</td>
        <td><button onClick={handleDelete} className=" btn btn-danger">delete</button></td>



        </tr>



       
    );
};

export default SingleCheckout;