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




// function Fetching() {
    
//     const [posts1, setPosts1] = useState ([]);

//     useEffect(()=>{
//         const fetchPosts1 = async() => {
//             try {
//                 const response1 = await axios.get("URL");
//                 console.log(response1.status);
//                 console.log(response1.data);
//                 setPosts1(response1.data);

//             } catch(error){
//                 console.log("Error fetching posts...");
//             }
//         };

//         fetchPosts1();
//     }, []);

//     return (
//         <div>
//             <h1>Posts</h1>
//             {posts1.length > 0 ? (
//                 <ul>
//                     {posts1.map ((post1) => {
//                         <li key = {posts1.id}>
//                                 <h3>{posts1.title}</h3>
//                                 <p> {posts1.body}</p>
                  
//                         </li>
//                       })};
//                 </ul>
//             ) : (
//                     <p>Loading Posts... </p>
//             )}
//         </div>
//     )
    
// }


// export default Fetching;


// When you have Local JSON file-> 

// import React, { useState, useEffect } from 'react';

// function FetchingData() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 // Use fetch to load local JSON from public directory
//                 const response = await fetch("/data.json");
//                 const data = await response.json();
//                 setPosts(data);
//             } catch (error) {
//                 console.log("Error fetching posts", error);
//             }
//         };
//         fetchPosts();
//     }, []);

//     return (
//         <div>
//             <h1>Posts</h1>
//             {posts.length > 0 ? (
//                 <ul>
//                     {posts.map((post) => (
//                         <li key={post.id}> 
//                             <h3>{post.id}. {post.title}</h3>
//                             <img src={post.url} alt={post.title} />
//                             <h2> Album Id :- {post.albumId}</h2>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading Posts...</p>
//             )}
//         </div>
//     );
// }

// export default FetchingData;
