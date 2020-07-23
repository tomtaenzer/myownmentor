import React from 'react';



export default function MentorCard(){

    async function fetchAllStudents() {

        const response = await fetch('/api/mentorCards', {
            method: 'Get'


        });
        if (response.status !==200) {
            throw new  Error(response.statusText);
        }
        console.log(response);
        return await response.json();
    }
        fetchAllStudents();
        return <div></div>

}
