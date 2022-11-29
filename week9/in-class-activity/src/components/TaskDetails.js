import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetails() {
  const params = useParams();
  const taskId = params.taskId;

  const [user, setUsers] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:5002/users?task=${taskId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); //parse it to JS
        setUsers(data[0].name);
        //setTasks(data);
        //setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.log('fetch data', err);
      }
    };
    fetchUser();
  }, [taskId]); //only with the first render

  return (
    <div>
      <p>You are viewing the details of a task.{params.taskId}</p>
      {user && <p>{user} is responsible for this AddTask</p>}
    </div>
  );
}
