import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import './App.css'


function App() {

  const [posts, setPosts] = useState([{name: 'Cole', post: 'Hello World'}])

  function addNewPost(post){
    
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social<small className='text-muted'>Feed</small></h3>
        <div className='col-xl-6'>
          <div className="border-box">
          <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box">
          <DisplayPosts parentPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
