import React from 'react';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import HomePage from './components/homepage';
import AdminPage from './components/adminsignup';
import AdminloginPage from './components/adminlogin';
import Addproduct from './components/addproduct';
import Getproduct from './components/products';
import Adminproduct from './components/adminproduct';
import Editproduct from './components/editproduct';
import PrivateRoute from './components/privateroutes';






function App() {
  return (
   <Router>
     <Route  path='/' exact component={HomePage} />
     <Route  path='/admin' exact component={AdminPage} />
     <Route  path='/adminlogin' exact component={AdminloginPage} />
     
     <Route  path='/products' exact component={Getproduct} />
     {/* <Route  path='/addproducts' exact component={Addproduct} />
     <Route  path='/adminproducts' exact component={Adminproduct} /> */}
     <Route path="/edit/:id" component={Editproduct} />
     <PrivateRoute exact path="/addproducts" component={Addproduct}/>
     <PrivateRoute exact path="/adminproducts" component={Adminproduct}/>






   </Router>
  );
}

export default App;
