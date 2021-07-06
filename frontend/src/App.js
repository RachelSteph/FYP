import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import ClientFormPage from "./pages/clientform";
import ConsultantFormPage from "./pages/consultantform";
import CategoriesPage from "./pages/categories";
import Ratings from "./components/Ratings";
import ProjectPage from "./components/projects";
import "antd/dist/antd.css";
import Clientprofile from "./components/Clientprofile";
import Clienthome from "./pages/clienthome";
import Agencyprofile from "./pages/agencyprofile";
import Agencyhome from "./pages/agencyhome";
import AllRegForm from "./components/Signupall";
import Calendar from "./components/calendar";
import ProtectedRoute from "./components/Signin/protectedRoute";
import Reportchart from "./components/reportchart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/clientform" component={ClientFormPage} exact />
        <Route path="/consultantform" component={ConsultantFormPage} exact />
        <Route path="/clienthome" component={Clienthome} exact />
        <ProtectedRoute path="/clienthome" component={Clienthome} exact />
        <Route path="/agencyhome" component={Agencyhome} exact />
        <Route path="/categories" component={CategoriesPage} exact />
        <Route path="/ratings" component={Ratings} exact />
        <Route path="/projects" component={ProjectPage} exact />
        <Route path="/clientprofile" component={Clientprofile} exact />
        <Route path="/agencyprofile" component={Agencyprofile} exact />
        <Route path="/usersignup" component={AllRegForm} exact />
        <Route path="/calendar" component={Calendar} exact />
        <Route path="/chart" component={Reportchart} exact />
      </Switch>
    </Router>
  );
}

export default App;
