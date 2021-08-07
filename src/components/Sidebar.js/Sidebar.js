import React from "react";
import { Link} from "react-router-dom";
import { useHistory, useParams } from "react-router";


const Sidebar = () => {
    const history = useHistory();
    const handleAllProducts = () => {
        history.push('/allproducts');
    }
    const handleAddProducts = () => {
        history.push('/addProduct');
    }
  return (
    <div className="m-5 p-5">
      
    
      <ul class="">
        <li class="list-group-item list-group-item-info" onClick={handleAllProducts} >
          
            All Products
            
      </li>
        <li class="list-group-item" onClick={handleAddProducts} > 
            
            Add Product
            
      </li>
      </ul>
     
      
    </div>
  );
};

export default Sidebar;
