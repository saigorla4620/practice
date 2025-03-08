import { useState, useEffect } from 'react';

function usePostData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the posts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setPosts(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Add a new post
  const addPost = async (newPost) => {
    debugger
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error('Failed to add post');
      }

      const addedPost = await response.json();
      addedPost.id = posts.length + 1; 

      setPosts((prevPosts) => [...prevPosts, addedPost]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update a post      
  const updatePost = async (postId, updatedData) => {
    debugger
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update post');
      }

      const updatedPost = await response.json();

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, ...updatedData } : post
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a post
  const deletePost = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { 
        method: 'DELETE' 
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (err) {
      setError(err.message);
    }
  };

  return { posts, loading, error, addPost, updatePost, deletePost };
}

export default usePostData;
