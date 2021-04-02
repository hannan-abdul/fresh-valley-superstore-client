import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddProducts from '../AddProducts/AddProducts';
import Manageproduct from '../Manageproduct/Manageproduct';

const Admin = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/manageproduct">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/addproduct">Add Products</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route path="/manageproduct">
                        <Manageproduct />
                    </Route>
                    <Route path="/addproduct">
                        <AddProducts />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Admin;