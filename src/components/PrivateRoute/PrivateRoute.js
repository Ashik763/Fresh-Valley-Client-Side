import React,{ useContext } from 'react';
import {Redirect,Route} from 'react-router-dom';
import { MyContext } from '../../App';
import {UserContext} from '../Home/Home';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser] = useContext(MyContext)

const user = JSON.parse(localStorage.getItem('user')) || {};


    return(
        <Route
            {...rest}
            render = {({Location}) => 
            loggedInUser.email ? (
                children  
            ):(
                <Redirect to = {{
                    pathname:"/login",
                    state: { from: Location}
                }}
                />
            )
            
            }
        />
    );
}
export default PrivateRoute;