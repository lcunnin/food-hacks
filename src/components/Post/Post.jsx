import React, { useState } from "react";
import axios from "axios";
import "./Post.css";

export default function Post(props) {
  const [newPost, setNewPost] = useState({ title: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://uves3.sse.codesandbox.io/api/posts/new", newPost)
      .then((response) => {
        setNewPost("");
        setLoading(false);
        if (response.data.length >= 0) {
          props.setFoodPosts(response.data);
        }
        
      })
      .catch((error) => {
        console.error(error.response.data)
        setLoading(false);
      });
  };

  return (
    <form className="new-entry-form" onSubmit={handleFormSubmit}>
      <header>
        <h3>POST A TIP OR TRICK</h3>
      </header>
      <div className="form-content">
        <div className="form-label">
          <label htmlFor="title">Title</label>
        </div>
        <div className="form-text">
          <input
            id="title"
            name="title"
            type="text"
            maxLength="300"
            placeholder="Enter Title"
            value={newPost.title || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-label">
          <label htmlFor="message">Message</label>
        </div>
        <div className="form-textarea">
          <textarea
            id="message"
            name="message"
            type="text"
            cols="50"
            rows="30"
            placeholder="Type Here"
            value={newPost.message || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
