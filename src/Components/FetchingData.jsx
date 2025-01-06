import React, { useEffect, useState } from 'react';
import axios from "axios";

function FetchingData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.data);
                console.log(response.config);

                setPosts(response.data);
            } catch (error) {
                console.log("Error fetching posts", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}> 
                            <h3>{post.id}. {post.title}</h3>
                            <img src={post.url} alt={post.title} />
                            <h2> Album Id :- {post.albumId}</h2>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading Posts...</p>
            )}
        </div>
    );
}

export default FetchingData;


