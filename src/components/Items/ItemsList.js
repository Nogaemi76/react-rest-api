import classes from "./ItemsList.module.css";
import Card from "../UI/Card";

const ItemsList = (props, { deletePost }) => {

  return (
    <div className={classes.items}>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Card>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => props.deletePost(post.id)}>Delete</button>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;