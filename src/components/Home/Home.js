import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';

const Home = () => {
    return (
    <div className="container">
        <div className="m-5">
            <h3 className="text-center">I grow by helping people in need</h3>
           <div className="d-flex justify-content-center">
               <input type="text"  placeholder="search....."/>
               <button className="btn btn-primary">Search </button>
            </div>
        </div>
        <Products/>
    </div>
    );
};

export default Home;