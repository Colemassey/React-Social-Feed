import React, { useState } from 'react';
import './LikeButton.css'

// how do I make like button icons instead of buttons?

const LikeButton = (props) => {


    return ( <div>
        <button type='button' className={`${props.post.reaction==='liked'?'liked':'neutral'} likeBtn`} onClick={()=>props.onLikeClick(props.index)}>Like</button>
        <button type='button' className={`${props.post.reaction==='disliked'?'disliked':'neutral'} likeBtn`} onClick={()=>props.onDislikeClick(props.index)}>Dislike</button>
    </div> );
}
 
export default LikeButton;
