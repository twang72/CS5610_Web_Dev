import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetails() {
    const params = useParams();
    const taskId = params.taskId;
    console.log(params);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("http://localhost:5002/tasks");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                } 
                const data = await response.json();
                setUsers(data[0].name);
                //setTasks(data);
                //setIsLoading(false);
                console.log(data);
            } catch (err) {
                console.log("fetch data", err);
            }
        };
        fetchData();
    }, []);

    return (
    <div><p>You are viewing the details of a task.{params.taskId}</p></div>
    )
}
