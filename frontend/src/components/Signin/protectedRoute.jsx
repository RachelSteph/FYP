import { Route, Redirect, useRouteMatch } from "react-router-dom";
import { message } from "antd";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const route = useRouteMatch();
  // console.log(JSON.parse(localStorage.getItem("user")).isAuthenticated);

  const authenticate = () => {
    const authenticated = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).isAuthenticated
      : false;
    return authenticated;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        
          return <Component {...props} />;
      
        }
      }
    />
  );
};

export default ProtectedRoute;