import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//  
import AddProduct from "./components/AddProduct/AddProduct";
import AllProducts from "./components/AllProducts/AllProducts";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyProducts from "./components/MyProducts/MyProducts";
import Nav from "./components/Nav/Nav";
import Notfound from "./components/NotFound.js/Notfound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const MyContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    name: '',
    email:'',
    img:''
  });


  return (
    
    <MyContext.Provider value={[loggedInUser,setLoggedInUser]} > 
    <Router>
        <Nav/>
        <Switch>
       
          <PrivateRoute path = "/checkout/:id">
          <Checkout/>
          </PrivateRoute>
          
          <PrivateRoute path = "/myproducts">
          <MyProducts/>
          </PrivateRoute>
          
          <PrivateRoute path = "/allproducts">
          <AllProducts/>
          </PrivateRoute>
          <PrivateRoute path = "/addProduct">
          <AddProduct/>
          </PrivateRoute>
          <Route exact path = "/">
          <Home/>
          </Route>
          <Route path = "/home">
          <Home/>
          </Route>
        
          <Route path = "/login">
          <Login/>
          </Route>
          
          <Route path = "*">
          <Notfound />
          </Route>
        </Switch>
      </Router>
      </MyContext.Provider>
    
  );
}

export default App;
