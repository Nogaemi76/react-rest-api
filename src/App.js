import { useEffect, useState } from 'react';

import Card from './components/UI/Card';

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
    <div>
      {posts.map(post => <Card key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Card>)}
    </div>
  );
}

export default App;
