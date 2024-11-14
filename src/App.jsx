import { Fragment } from "react";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import ArticleDetails from "./pages/articleDtails/ArticleDetails.jsx";
import Home from "./pages/home/Home.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar title="وبلاگ" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/article-details/:id" element={<ArticleDetails />} />

      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
