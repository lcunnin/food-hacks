import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import "./styles.css";

export default function App() {
  const [foodPosts, setFoodPosts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("https://zn2o6.sse.codesandbox.io/api/posts", foodPosts)
      .then((response) => {
        if (response.data !== null) {
          setFoodPosts(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsError(error);
      });
  }, [foodPosts]);

  if (isError) return "Opps...something went wrong!";

  const listItems = foodPosts.map((foodPost) => (
    <div key={foodPost.id} className="post-body">
      <h3>{foodPost.title}</h3>
      <p>{foodPost.message}</p>
    </div>
  ));

  return (
    <div className="App">
      <Header />
      <div className="posts-container">
        <div className="post-list">{listItems}</div>
        <Post className="submit-post-container" />
      </div>
    </div>
  );
}
