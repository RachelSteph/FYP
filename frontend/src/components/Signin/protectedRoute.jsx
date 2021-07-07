import { Route, Redirect, useRouteMatch } from "react-router-dom";
// import auth from "./auth";
import { message } from "antd";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const route = useRouteMatch();
  // console.log(JSON.parse(localStorage.getItem("user")).isAuthenticated);

  const authenticate = () => {
    const authenticated = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : false;
    return authenticated;
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        const authenticated = authenticate();
        if (authenticated!==false) {
          if (route.pathname === "/") {
            message.success(`Welcome`);
          }

          return <Component {...props} />;
        } else {
          
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;