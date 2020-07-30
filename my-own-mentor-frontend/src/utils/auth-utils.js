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

export async function performLogin(username, password){
    const response = await fetch('/auth/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    });
    if (response.status !==200) {
        throw new Error(`Registration failed: ${response.statusText}`);
    }
         return await response.text();

}

export async function performRegistration(registrationData) {
    const response = await fetch ('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
    });
    if (response.status !== 200) {
        throw new Error (`Registration failed: ${response.statusText}`);
    }
    return await response.text();
}