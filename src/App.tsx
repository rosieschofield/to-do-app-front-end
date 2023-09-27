import { useEffect, useState } from "react";
import { DbItem, DbItemWithId } from "./data";
import axios from "axios";
import { AddPost } from "./AddPostForm";

function App(): JSX.Element {
  const [data, setData] = useState<DbItemWithId[]>([]);

  useEffect(() => {
    const getData = () => {
      fetch(`https://to-do-server-hw4o.onrender.com/todos`)
        .then((response) => response.json())
        .then((todos) => setData(todos));
    };
    getData();
  }, []);

  /*const handleAddNew = () => {
  axios.post(`https://to-do-server-hw4o.onrender.com/items`, whateverData)
  const addNewToDo = async () => {
    const response = await fetch(
        `https://to-do-server-hw4o.onrender.com/items`
    );
    const jsonBody: DbItemWithId[] = await response.json();
    setData(jsonBody);
};
  addNewToDo();
};*/

  const handleDelete = (id: number) => {
    axios
      .delete(`https://to-do-server-hw4o.onrender.com/todos/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setData(data.filter((element) => element.id !== id));
        }
      });
  };

  const addPost = async (dbItem: DbItem) => {
    await fetch("https://to-do-server-hw4o.onrender.com/todos", {
      method: "POST",
      body: JSON.stringify({
        description: dbItem.description,
        creationDate: dbItem.creationDate,
        dueDate: dbItem.dueDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData((prevPosts) => [data, ...prevPosts]);
      });
  };

  const mapData = (data: DbItemWithId[]) => {
    return data.map((toDo: DbItemWithId) => (
      <tr key={toDo.id}>
        <td>{toDo.description}</td>
        <td>{toDo.creationDate}</td>
        <td>{toDo.dueDate}</td>
        <td>
          <button>EDIT</button>
        </td>
        <td>
          <button>Mark AS COMPLETE</button>
        </td>
        <td>
          <button onClick={() => handleDelete(toDo.id)}>DELETE</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>To Do List</h1>

      <table>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Created On</th>
            <th>Due By</th>
          </tr>
        </thead>
        <tbody>{mapData(data)}</tbody>
      </table>
      <AddPost addPost={addPost} />
    </div>
  );
}

export default App;
