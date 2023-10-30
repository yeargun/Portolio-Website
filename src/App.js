import Layout from "./components/Layout";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import LayoutWithBlog from "./components/LayoutWithBlog";
import BlogpostLayout from "./components/BlogPost/BlogpostLayout";
import BlogPost from "./components/BlogPost";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
} from "darkreader";
import { getBCS } from "./components/ThemeGod/utils";
function applyTheme() {
  const theme = localStorage.getItem("theme");
  console.log("theme this", theme);
  if (theme === "dark") {
    enableDarkMode(getBCS());
  } else if (theme === "light") {
    disableDarkMode();
  } else {
    followSystemColorScheme();
  }
}

applyTheme();

// Listen for changes to the "theme" key in local storage
window.addEventListener("storage", (event) => {
  if (event.key === "theme") {
    applyTheme();
  }
});

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="" element={<LayoutWithBlog />}>
            <Route index element={<Home />} />
            <Route path="/p/*" element={<Home />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Portfolio />} />
          </Route>
          <Route path="/" element={<BlogpostLayout />}>
            <Route path="/shut/*" element={<BlogPost />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
