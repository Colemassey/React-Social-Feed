import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
            reaction: 'none'
        };
        props.addNewPostProperty(newPost)
        setName('')
        setPost('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name:</label>
                <input required type='text' className="form-control" value={name} onChange={(event) => setName(event.target.value)} /><br />
            </div>
            <div className='form-group'>
            <label>Post:</label>
                <input required type='text' className="form-control" value={post} onChange={(event) => setPost(event.target.value)} />
                <button type='submit' className="btn btn-primary" style={{'margin-top': '1em'}}>Create</button>
            </div>
        </form>
    );
}
 
export default CreatePost;