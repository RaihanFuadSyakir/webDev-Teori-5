import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState("");
  const [items,setItem] = useState([]);
  useEffect(() => {
    console.log("fetching...");
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then(response => response.json())
      .then(json => setItem(json))
  },[data])
  return (
    <div className="App">
      <div>
        <button onClick={() =>{setData("posts")}}>POST</button>
        <button onClick={() =>{setData("users")}}>USER</button>
        <button onClick={() =>{setData("comments")}}>COMMENTS</button>
      </div>
      <div>{items.map((item) =>{
        return(
          <div>
            <div><p>Title</p>{item.title}</div>
            <div><p>Body</p>{item.body}</div>
          </div>
        )
      })}</div>
    </div>
  );
}

export default App;
