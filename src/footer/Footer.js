import React from "react";
import styles from "./Footer.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import Kub from "./kubs/Kub";

function Footer() {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
        <h3 className={styles.text}>Zakharov Roman</h3>
        <div className={styles.main}>
         <Kub/>
         <Kub/>
         <Kub/>
         <Kub/>
        </div>
        <span className={styles.protect}>©2020 All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
