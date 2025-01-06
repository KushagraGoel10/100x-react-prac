import React, { useEffect, useState } from 'react'
import axios from "axios";

function FetchingData(){

    const [posts, setPosts] = useState([]);

    useEffect (() =>{

        const fetchPosts = async () =>{
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log (response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.data);
                
                setPosts(response.data);
                
            } catch(error){
                console.log("Error fetching posts");
            }
        }

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.length > 0 ? (
                <ul>
                    {posts.map ((post) => (
                        <li key={post.id}> {post.title}</li>
                    ))}
                </ul>

            ) : (
            <p>Loading Posts </p>
            )}
          </div>
    )
}

export default FetchingData;