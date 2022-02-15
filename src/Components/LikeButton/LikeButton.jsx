import React, { useState } from "react";
import './LikeButton.css'

const LikeButton = (props) => {


    return ( <div>
        <button type='button' className={`${props.post.reaction==='liked'?'liked':'none'} likeBtn`} onClick={()=>props.onLikeClick(props.index)}>Like</button>
        <button type='button' className={`${props.post.reaction==='disliked'?'disliked':'none'} dislikeBtn`} onClick={()=>props.onDislikeClick(props.index)}>Dislike</button>
    </div> );
}
 
export default LikeButton;
