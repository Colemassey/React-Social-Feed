import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";


function App() {

  const [Posts, setPosts] = useState([{name: 'Cole', post: 'Hello World'}])

  return (
    <div>
      <DisplayPosts parentPosts={Posts} />
      <CreatePost />
    </div>
  );
}
export default App;
