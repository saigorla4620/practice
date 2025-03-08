import { useState, useEffect } from 'react';

function useUserData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Add new user
  const addUser = async (newUser) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
      });
      const addedUser = await response.json();
      setData((prevData) => [...prevData, addedUser]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user
  const updateUser = async (userId, updatedData) => {
    debugger
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${Number(userId)}`, {
        method: 'PUT',
        headers: { 
            "Content-Type": "application/json"
          },
        body: JSON.stringify(updatedData),
      });
      const updatedUser = await response.json();
      setData((prevData) =>
        prevData.map((user) => (user.id === userId ? updatedUser : user))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { method: 'DELETE' });
      setData((prevData) => prevData.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err.message);
    }
  };

  return { data, loading, error, addUser, updateUser, deleteUser }
}

export default useUserData;
