import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
    <div>
      <h1>To Do List</h1>
      <h2>{greet("World")}</h2>;
      <table>
        <tr>
          <th>To Do</th>
          <th>Created On</th>
          <th>Due By</th>
        </tr>
        <tr>
          <td>Example Item</td>
          <td>DD/MM/YY</td>
          <td>DD/MM/YY</td>
          <button>EDIT</button>
          <button>Mark AS COMPLETE</button>
          <button>DELETE</button>
        </tr>
      </table>
      <button>ADD NEW</button>
    </div>
  );
}

export default App;
