import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Task ({task, deleteHandler}) {
    return (
        <li>
            <div className='taskContainer'>
                <div className='iconNameContainer'>
                    <p>{task.title}</p>
                    <FaTimes onClick = {() => deleteHandler(task.id)}
                     />
                </div>
                <div>
                    <p>{task.date}</p>
                </div>

            </div>

        </li>
    );
}