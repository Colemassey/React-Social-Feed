import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import './App.css'

// Only other thing i'd really want to do to this is to make Like icons instead of the buttons. How do I do that?


function App() {
  const [posts, setPosts] = useState([])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];

    setPosts(tempPosts)
  }

  function onLikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "neutral" || newTempPosts[index].reaction === 'disliked') {
      newTempPosts[index].reaction = "liked";
    } else {
      newTempPosts[index].reaction = "neutral";
    }
    setPosts(newTempPosts)
  }

  function onDislikeClick(index) {
    let newTempPosts = [...posts];
    if (newTempPosts[index].reaction === "neutral" || newTempPosts[index].reaction === 'liked') {
      newTempPosts[index].reaction = 'disliked';
    } else {
      newTempPosts[index].reaction = 'neutral';
    }
    setPosts(newTempPosts)
  }

  return (
    <div class="parent">
      <div class="div1"> </div>
      <div class="div2"> </div>
      <div class="div3">
      <div className='container-fluid'>
      <div className='row'>
        </div>
          <div className="border-box">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentPosts={posts} onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} />
          </div>
    </div>
      </div>
      <div class="div4"> </div>
      <div class="div5"> </div>
    </div>
  );
}
export default App;
