import React from 'react';
import { Link } from 'react-router-dom';
import  { useContext, useState } from 'react';
import { MyContext } from '../../App';


const Nav = () => {

  const [loggedInUser,setLoggedInUser] = useContext(MyContext)
    return (
        
            

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-5" href="/">Fresh Valley</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/myproducts">Orders</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to='/allproducts' >admin</Link>
        </li>
        <li className="nav-item me-5">
          <a className="nav-link active" href="/"> {loggedInUser.name ? <p>Log Out</p>  : <p> Deals </p> }</a>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link active" to="/login" ><button className="btn btn-primary"> {loggedInUser.name ? <p>{loggedInUser.name}</p>  : <p> Log In </p> }  </button></Link> 
        </li>
        
      
       
      </ul>
      
    </div>
  </div>
</nav>

       
    );
};

export default Nav;