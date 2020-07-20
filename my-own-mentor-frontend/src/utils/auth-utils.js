const jwtDecode = require('jwt-decode');

const key = "mentor-user-token";

export function getJWTToken(){
    return localStorage.getItem(key);
}

export function removeJWTToken(){
    return localStorage.removeItem(key);
}

export function setJWTToken(token){
    return localStorage.setItem(key, token);
}

export function isJwtTokenValid(){
    const jwtToken = getJWTToken();
    if(!jwtToken){
        return false;
    }
    const  decodedToken = getDecodedJwtToken();
    return new Date().getTime() / 1000 < decodedToken.exp;
}


export function getDecodedJwtToken(){
    const jwtToken = getJWTToken();
    const decodedToken = jwtDecode(jwtToken);
    console.log(decodedToken);
    return decodedToken;
}