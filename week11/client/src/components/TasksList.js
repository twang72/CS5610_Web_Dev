import React, { useEffect, useState } from 'react'
import Task from './Task';

export default function TaskLists() {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("http://localhost:5002/tasks");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } 
                const data = await response.json();
                setTasks(data);
                setIsLoading(false);
            } catch (err) {
                console.log("fetch data", err);
            }
        };
        fetchData();
    }, []);

    const deletePressed = async (deletedId) => {
        //console.log('clicked', deletedId);
        //const result = tasks.filter((item) => { return item.id !== deletedId; });
        //setTasks(result);
        try {
            const response =  await fetch(`http://localhost:5002/tasks/${deletedId}`, {method:"DELETE",});
            if (!response.ok) {
                throw new Error(`Http error! Status: ${response.status} `);
            }
        } catch (err) {
            console.log("delete", err);
        }
        const result = tasks.filter((item) => {
            return item.id !== deletedId;
        });
        setTasks(result);
    };

   if (isLoading) {
    return <p>Loading</p>
   }
   return tasks.length === 0 ? (
    <li>No task left!</li>
   ) : (
    tasks.map((item) => (
        <Task key={item.id} task={item} deleteHandler={deletePressed} />
    ))
    );
}