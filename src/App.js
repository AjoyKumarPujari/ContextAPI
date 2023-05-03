import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route, useLocation, useSearchParams , Routes } from "react-router-dom";
import BlogPage from "./Pages/BlogPage";
import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams]=useSearchParams();//access and update query parameter 
  const location = useLocation();//current location

  useEffect(() => {
    //fetchBlogPosts();
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      //tag wala page show karna hai
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category =location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search ]);

  return (
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/blog/:blogId" element= {<BlogPage/>} />
      <Route path="/tags/:tag" element= {<TagPage/>} />
      <Route path="/categories/:category" element= {<CategoryPage />} />
    </Routes>
  );

}
