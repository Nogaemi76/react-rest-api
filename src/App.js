import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="App">
      {posts.map(post => <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>)}
    </div>
  );
}

export default App;
