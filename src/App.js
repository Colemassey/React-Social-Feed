import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";


function App() {

  const [Posts, setPosts] = useState([{name: 'Cole', post: 'Hello World'}])

  return (
    <div>
      <DisplayPosts parentPosts={Posts} />
    </div>
  );
}
export default App;
