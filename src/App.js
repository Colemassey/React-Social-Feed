import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";


function App() {

  const [posts, setPosts] = useState([])

  function addNewPost(post){
    
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }

  function onLikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "none" || newTempPosts[index].reaction === 'disliked') {
      newTempPosts[index].reaction = "liked";
    } else {
      newTempPosts[index].reaction = "none";
    }
    setPosts(newTempPosts)
  }

  function onDislikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "none" || newTempPosts[index].reaction === 'liked') {
      newTempPosts[index].reaction = 'disliked';
    } else {
      newTempPosts[index].reaction = 'none';
    }
    setPosts(newTempPosts)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBar />
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
