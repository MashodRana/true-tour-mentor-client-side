import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div class="flex justify-center items-center">
            <div
                class="
            animate-spin
            rounded-full
            h-32
            w-32
            border-t-2 border-b-2 border-purple-500
          "
            ></div>
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{ pathname: '/login', state: { from: location } }}
            />}
        >
        </Route>
    );
};

export default PrivateRoute;