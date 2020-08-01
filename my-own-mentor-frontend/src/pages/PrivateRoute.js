import React, {useContext, useEffect} from "react";
import {removeJWTToken} from "../utils/auth-utils";
import {Redirect, Route} from "react-router-dom";
import {UserDispatchContext, UserStateContext} from "../user/UserContext";
import {LOGOUT} from "../user/UserContextProvider";



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
                    return <Redirect to={'/userlogin'}/>;
                }
                if (authStatus === 'SUCCESS') {
                    if (new Date().getTime() / 1000 >= userData.exp) {
                        return <Redirect to={'/userlogin'}/>;
                    }
                    return <Component {...props} />;
                }
                return <div>LOADING...</div>
            }}
        />
    );
}