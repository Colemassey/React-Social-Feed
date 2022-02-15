import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import './App.css'


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
    <div className='container-fluid'>
      <div className='row'>
        <h2 style={{ margin: "1em" }}>
          Social<small className="text-muted">Feed</small>
        </h2>
        <div className='col-xl-6'>
          <div className="border-box">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div className="border-box">
            <DisplayPosts parentPosts={posts} onLikeClick={onLikeClick} onDislikeClick={onDislikeClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
