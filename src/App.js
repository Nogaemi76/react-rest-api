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
        console.log('data', data);
        setPosts(data);
      })
      .catch(error => console.log(error.message));
  }, []);

  const onAddPostHandler = (newPost) => {
    console.log("newPost", newPost);
    setPosts(prevPosts => [newPost, ...prevPosts]);
    console.log('posts', posts);
  };

  const deletePostHandler = async (id) => {
    console.log('id', id);
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      setPosts(
        posts.filter(post => {
          return post.id !== id;
        })
      );
    } else {
      return;
    }
  };

  return (
    <div className={classes.app}>
      <AddItem onAddPost={onAddPostHandler} />
      <ItemsList posts={posts} deletePost={deletePostHandler}/>
    </div>
  );
}

export default App;
