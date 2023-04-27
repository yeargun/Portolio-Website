import Layout from "./components/Layout";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import LayoutWithBlog from "./components/LayoutWithBlog";
// const BlogPost = lazy(() => import("./components/BlogPost"));
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<LayoutWithBlog />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shut/*" element={<BlogPost />} />
            <Route path="*" element={<Portfolio />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
