import { useState } from "react";
import Card from "../UI/Card";

const AddItem = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPostHandler = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      props.onAddPost(data);
      setTitle('');
      setBody('');
    })
    .catch(error => console.log(error.message));
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addPostHandler(title, body);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <textarea value={body} onChange={bodyChangeHandler}></textarea>
        <button type="submit">Add Item</button>
      </form>
    </Card>
  );

};


export default AddItem;