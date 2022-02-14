import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <label for='name'>Name:</label>
                    <input type='text' id='name' value={name} onChange={(event) => setName(event.target.value)} /><br />
                </thead>
                <tbody>
                    <label for='post'>Post:</label>
                    <input type='text' id='post' value={post} onChange={(event) => setPost(event.target.value)} />
                    <button type='submit'>Create</button>
                </tbody>
            </table>
        </form>
    );
}
 
export default CreatePost;