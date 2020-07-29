import React, {useContext, useEffect} from "react";
import {removeJWTToken} from "../utils/auth-utils";
import Redirect from "react-router-dom/es/Redirect";
import {UserDispatchContext, UserStateContext} from "../user/UserContext";
import {LOGOUT} from "../user/UserContextProvider";
import Route from "react-router-dom/es/Route";


export default function PrivateRoute({component: Component, ...rest}) {
    const {authStatus, userData} = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    useEffect(() => {
        if (
            authStatus === 'SUCCESS' &&
            new Date().getTime() / 1000 >= userData.exp
        ) {
            removeJWTToken();
            dispatch({type: LOGOUT});
        }
    });

    return (
        <Route
            {...rest}
            render={(props) => {
                if (authStatus === 'FAILED' || !authStatus) {
                    return <Redirect to={'/login'}/>;
                }
                if (authStatus === 'SUCCESS') {
                    if (new Date().getTime() / 1000 >= userData.exp) {
                        return <Redirect to={'/login'}/>;
                    }
                    return <Component {...props} />;
                }
                return <div>LOADING...</div>
            }}
        />
    );
}