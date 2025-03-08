import React, { useState, useEffect } from "react";
import Button from "./button";
import usePostData from "./postFetch";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePost() {
    const { id } = useParams();
    const { posts, loading, error, updatePost } = usePostData();
    const [post, setPost] = useState({
        userId: 0,
        title: "",
        body: ""
    });
    const navigate = useNavigate();

    const result = posts.find((item) => item.id === Number(id));

    useEffect(() => {
        if (result) {
            setPost({
                userId: result.userId,
                title: result.title,
                body: result.body
            });
        }
    }, [result]);

    function handleChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const handleUpdate = async () => {
        await updatePost(id, post);
        alert("Data Updated");
        navigate('/'); // Navigate back to the posts list
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading post: {error.message}</p>;

    return (
        <div className="update">
            <div>
                <input type="number" value={post.userId} name="userId" onChange={handleChange} />
            </div>
            <div>
                <input type="text" value={post.title} name="title" onChange={handleChange} />
            </div>
            <div>
                <input type="text" value={post.body} name="body" onChange={handleChange} />
            </div>
            <Button 
                type="Update post"
                style={{ bgcolor: "yellow", color: "white", padding: "10px", border: "none", width: "120px" }}
                action={handleUpdate}
            />
        </div>
    );
}

export default UpdatePost;