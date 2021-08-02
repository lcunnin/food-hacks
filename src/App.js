import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import "./styles.css";

export default function App() {
  const [foodPosts, setFoodPosts] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (foodPosts === null) {
      axios
      .get("https://uves3.sse.codesandbox.io/api/posts", foodPosts)
      .then((response) => {
        setFoodPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsError(error);
      });
    }
  });

  if (isError) return "Opps...something went wrong!";

  return (
    <div className="App">
      <Header />
      <div className="posts-container">
        <div className="post-list">{foodPosts &&
            foodPosts.map((foodPost) => {
              return (
                <div key={foodPost.id} className="post-body">
                  <h3>{foodPost.title}</h3>
                  <p>{foodPost.message}</p>
                </div>
              );
            })}</div>
        <Post className="submit-post-container"/>
      </div>
    </div>
  );
}