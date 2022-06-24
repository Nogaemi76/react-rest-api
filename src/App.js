import { useEffect, useState } from 'react';

import ItemsList from './components/Items/ItemsList';

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
      <ItemsList posts={posts}/>
    </div>
  );
}

export default App;
