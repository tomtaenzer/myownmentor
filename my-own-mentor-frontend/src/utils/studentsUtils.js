import { getJWTToken } from "./jwt-utils";

export async function fetchAllStudents() {
    const token = getJWTToken();
    const response = await fetch('/api/students', {
        method: 'GET',
        headers: {
            Authorization:  `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export function putAStudent(name, lastname, university, subject, price) {
    const token = getJWTToken();
    return fetch('/api/students', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ description: description }),
    }).then((response) => {
        if (response.status !== 200) {
            throw new Error('invalid response');
        }

        return response.json();
    });
}

export function deleteAStudent(id) {
    const token = getJWTToken();
    return fetch(`/api/students/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}

export async function fetchAStudent(id) {
    const token = getJWTToken();
    const response = await fetch(`/api/students/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.status !== 200) {
        throw new Error('something went wrong!');
    }
    return await response.json();
}
