import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import ClientFormPage from './pages/clientform';
import ConsultantFormPage from './pages/consultantform';
//import ClientHomePage from './pages/clienthome';
//import ConsultantHomePage from './pages/consultanthome';
import CategoriesPage from './pages/categories';
import clientdrawer from './pages/clientdrawer';
import Editprofile from './pages/editprofile';
import PersistentDrawerLeft from './pages/clientdrawer';
import Ratings from './components/Ratings';
import ProjectPage from './components/projects';
import 'antd/dist/antd.css';
import EditProfile from './pages/editprofile';
import Consultdrawer from './pages/consultdrawer';
import Clientsignup from './components/Clientprofile';
import Clientprofile from './components/Clientprofile';
import Appointmentforms from './pages/appointmentforms';
import Appmodal from './components/appmodal';
import Fetch from './components/axios';





function App(){
   return(
      <Router>
         <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SigninPage} exact />
            <Route path="/clientform" component={ClientFormPage} exact/>
            <Route path="/consultantform" component={ConsultantFormPage} exact/>
            <Route path="/clientdrawer" component= {PersistentDrawerLeft} exact/>
            <Route path="/editprofile" component={Editprofile} exact/>
            <Route path="/consultdrawer" component={Consultdrawer} exact/>
            <Route path="/categories" component={CategoriesPage}exact/>
            <Route path="/ratings" component={Ratings}exact/>
            <Route path="/projects" component={ProjectPage}exact/>
            <Route path="/clientprofile" component={Clientprofile}exact/>
            <Route path="/appointments" component= {Appointmentforms} exact/>
            <Route path="/appmodal" component= {Appmodal} exact/>
            <Route path="/axios" component= {Fetch} exact/>


           



            
         </Switch>

       
      
         
      </Router>
   );
}


export default App;



