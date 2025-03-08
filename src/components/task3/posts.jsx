import React, { useEffect, useState } from "react";
import usePostData from "./postFetch";
import { Space, Table } from 'antd';
import Button from "./button";
import Example from "../comp2";
import { Link } from "react-router-dom";

const { Column } = Table;

function PostDisplay() {
    const { posts, loading, error, addPost, updatePost, deletePost } = usePostData();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [selectItems, setSelectItems] = useState(10);

    useEffect(() => {
        // Calculate total pages based on the number of posts and selected items per page
        setTotalPages(Math.ceil(posts.length / selectItems));
        
        
    }, [posts, selectItems]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    // Calculate the start index for slicing the posts array
    const startPage = (page - 1) * selectItems;
    // Slice the posts array to get the items for the current page
    const pageItems = posts.slice(startPage, startPage + selectItems);
    
    return (
        <>
            <h1>Posts</h1>
            <Example/>
            <div className="Posts">

                
                <Table dataSource={pageItems} pagination={false}>
                    <Column title="Id" dataIndex="id" key="id" />
                    <Column title="Title" dataIndex="title" key="title" />
                    <Column title="Body" dataIndex="body" key="body" />
                    <Column
                        title="Action"
                        key="action"
                        render={(pageItems) => (
                            <Space size="middle">
                                <Link to="/adduser">
                                    <Button type="Add" style={{ color: "Black", bgcolor: "green", width: "150px", padding: "10px", border: "none", borderRadius: "10px" }} />
                                </Link>
                                <Link to={`/update/${pageItems.id}`}>
                                    <Button type="Update" style={{ color: "green", bgcolor: "yellow", width: "150px", padding: "10px", border: "none", borderRadius: "10px" }} />
                                </Link>
                                <Button type="Delete" action={() => deletePost(pageItems.id)} style={{ color: "white", bgcolor: "red", width: "150px", padding: "10px", border: "none", borderRadius: "10px" }} />
                            </Space>
                        )}
                    />
                </Table>

                <button onClick={handlePrevPage} disabled={page === 1}>
                    Prev
                </button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    Next
                </button>

                <select name="PagesSelect" id="pagesSelect" value={selectItems} onChange={(e) => setSelectItems(Number(e.target.value))}>
                    <option value="5">5 Items</option>
                    <option value="10">10 Items</option>
                    <option value="20">20 Items</option>
                </select>
            </div>
        </>
    );
}

export default PostDisplay;