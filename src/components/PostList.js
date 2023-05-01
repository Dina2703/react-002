import React, { useState, useEffect } from "react";

function PostList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchList = fetch("https://jsonplaceholder.typicode.com/users");
    fetchList
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3>&#123;JSON&#125; Placeholder users</h3>

      {list?.map((each) => {
        return <p key={each.id}>{each.name}</p>;
      })}
    </div>
  );
}

export default PostList;
