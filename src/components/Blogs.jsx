import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"
import { Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    //consume by using usecontext
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className="flex flex-col gap-y-7 my-4">
    { loading ? (
        <div className="min-h[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">Loading</p>
        </div>
     ) : posts.length === 0 ? (
        <div className="min-h[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blogs Found!</p>
        </div>
     ) : (
        posts.map((post) => (
                <BlogDetails key={post.id} post={post}/>
            ))
        )}
      
    </div>
  );
}

export default Blogs
