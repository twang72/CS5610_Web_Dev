import React, {useState} from 'react'

export default function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <form>
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
