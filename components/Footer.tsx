import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const footerComment: string = "Implemented with ";

  const goToNextJsWebsite = () => {
    window.open("https://nextjs.org/");
  };

  return (
    <footer className={styles.footer}>
      {footerComment}
      <a href="https://nextjs.org/">
        <span>NEXT.js</span>
      </a>
    </footer>
  );
};

export default Footer;
