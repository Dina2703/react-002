import React, { useState } from "react";

function PostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) =>
      response
        .json()
        .then((json) => console.log(json))
        .catch((err) => console.log(err))
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="useId">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

export default PostForm;
