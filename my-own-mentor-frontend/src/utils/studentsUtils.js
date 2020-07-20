import { getJWTToken } from "./jwt-utils";

export async function fetchAllStudents() {
    const token = getJWTToken();
    const response = await fetch('/api/students', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ${token}',
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export function putAStudent(name, lastname, university, subject, price) {
    const token = getJWTToken();
    return fetch
}
