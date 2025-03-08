import React, { useState } from "react";
import Button from "./button";
import usePostData from "./postFetch";
import { useNavigate } from "react-router-dom";

function AddPost() {
    const [post, setPost] = useState({
        title: "",
        body: ""
    });
    const { addPost } = usePostData();
    const navigate = useNavigate();

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const handleAdd = async () => {
        await addPost(post);
        alert("Data Added");
        setPost({ title: "", body: "" }); // Reset form fields
        navigate('/'); // Navigate back to the posts list
    };

    return (
        <div className="add">
            <div>
                <input type="text" placeholder="Enter Your title" value={post.title} name="title" onChange={handleChange} />
            </div>
            <div>
                <input type="text" placeholder="Enter Your Quote" value={post.body} name="body" onChange={handleChange} />
            </div>
            <Button 
                type="Add post" 
                style={{ bgcolor: "blue", color: "white", padding: "10px", border: "none", width: "120px" }}
                action={handleAdd}
            />
        </div>
    );
}

export default AddPost;
