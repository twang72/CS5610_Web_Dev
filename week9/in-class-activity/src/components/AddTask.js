import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted", { title: title, date: date });
    try {
      const response = await fetch ("http://localhost:5002/tasks", {
        method: "POST",
        headers: { 'content-type': "application/json"},
        body: JSON.stringify({title: title, date: date}),
      });
      if (!response.ok) {
        throw new Error(`Http error! Status: ${response.status} `);
      }
      navigate("/tasks");
    } catch (err){
      console.log ('post', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
      <label>Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className="form-control">
      <label>Date</label>
      <input type="text" value={date} onChange={(e)=>setDate(e.target.value)}></input>
      </div>
      <input type="submit" value="Save Task"/>
    </form>
  )
}
