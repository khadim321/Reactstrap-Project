import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/video-react/dist/video-react.css";
import HomePage from './Components/HomePage';
import Business from './Components/Business';
import Courses from './Components/Courses';
import SignUp from './Components/SignUp';
import {BrowserRouter , Route , Switch } from 'react-router-dom';

 


function Content()
{
    return(
        <BrowserRouter>    
<div> 
    <Switch>
       
        <Route path = "/" exact component = {HomePage} />
        <Route path="/business" component={Business} />
        <Route path="/courses" component={Courses} />
        <Route path="/signup" component={SignUp} />

    </Switch>
</div>
        </BrowserRouter> 
        )
}




ReactDOM.render(<Content />, document.getElementById('root'));
serviceWorker.unregister();
