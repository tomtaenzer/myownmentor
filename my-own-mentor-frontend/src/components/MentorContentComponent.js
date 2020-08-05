import React, {useState} from 'react';
import MentorUserDrawer from "./MentorUserDrawer";
import UserDrawer from "./UserDrawer";


export default function MentorContentComponent() {

// FETCH PROFILE DATA

    const [mentor, setMentor] = useState("");

    return(
        <div>
            {mentor &&
                <MentorUserDrawer />
            }
            {!mentor &&
            <UserDrawer />
            }
        </div>



    )
}

