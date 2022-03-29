import { useEffect } from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const FOOTER_COMMENT: string = 'Implemented with ';

  return (
    <footer className={styles.footer}>
      <div>
        {FOOTER_COMMENT}
        <a href="https://nextjs.org/">
          <span>NEXT.js</span>
        </a>
      </div>
      <div>{'More countries are to be updated!'}</div>
    </footer>
  );
};

export default Footer;
