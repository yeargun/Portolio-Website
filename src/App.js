import Layout from "./components/Layout";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import BlogPost from "./components/BlogPost";
import LayoutWithBlog from "./components/LayoutWithBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<LayoutWithBlog />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Portfolio />} />
        </Route>

        <Route path="/shut" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
