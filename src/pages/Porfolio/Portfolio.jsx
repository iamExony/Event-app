import Navbar from "../../components/Navbar";
import Content from "./Content";
import Footer from "../../components/footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <ScrollRestoration />
      <Content />
    </>
  );
};

export default Portfolio;
