import { useState } from "react";
import { DbItem, DbItemWithId } from "./data";

interface AddPostProps {
  addPost: (dbItem: DbItem) => Promise<void>;
}

export function AddPost(props: AddPostProps) {
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.addPost({ description, creationDate, dueDate });
    //setDescription('');
    //setCreationDate('');
    //setDueDate('');
  };

  /*const addPost = async (dbItem: DbItem) => {
        await fetch('https://to-do-server-hw4o.onrender.com/todos', {
          method: 'POST',
          body: JSON.stringify({
            description: dbItem.description,
            creationDate: dbItem.creationDate,
            dueDate: dbItem.dueDate,
          }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response)=> response.json())
        .then((data)=>{
          setData((prevPosts) => [data, ...prevPosts])
        })
      };*/

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description"> Task: </label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="creationDate">Date Task Set:</label>
        <input
          name="creationDate"
          type="date"
          value={creationDate}
          onChange={(e) => setCreationDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Complete By: </label>
        <input
          name="dueDate"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit">Add New</button>
    </form>
  );
}
