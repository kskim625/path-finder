import type { NextPage } from "next";
import HeadTag from "../components/HeadTag";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Footer from "../components/Footer";
import styles from "../styles/Footer.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadTag />
      <Header />
      <Grids />
      <Footer />
    </div>
  );
};

export default Home;
