import { useEffect, useState } from 'react';
import classes from './App.module.css';

import AddItem from './components/Items/AddItem';
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

  const onAddPostHandler = (newPost) => {
    console.log("newPost", newPost);
    setPosts(prevPosts => [newPost, ...prevPosts]);
    console.log('posts', posts);
  };

  return (
    <div className={classes.app}>
      <AddItem onAddPost={onAddPostHandler} />
      <ItemsList posts={posts} />
    </div>
  );
}

export default App;
