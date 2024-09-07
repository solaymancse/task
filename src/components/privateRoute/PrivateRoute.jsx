import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const user = localStorage.getItem('user');

    if (!user) return <Navigate to="/signin" replace  />;

    return children;

}

export default PrivateRoute
