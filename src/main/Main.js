import React from "react";
import styles from "./Main.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import { useMediaPredicate } from "react-media-hook";

function Main() {

  const biggerThan760 = useMediaPredicate("(max-width: 760px)");
  const biggerThan380 = useMediaPredicate("(max-width: 380px)")

  return (
    <div className={styles.mainBlock}>
      <div className={`${stylesContainer.container} ${biggerThan760 && styles.container760}`}>
        <div className={`${styles.text} ${biggerThan380 && styles.container380}`}>
          <span>Hi There</span>
          <h1>I am Roman Zakharov</h1>
          <p>Graphic Designer</p>
          
        </div>
        <div className={`${styles.photo} ${biggerThan380 && styles.container380}`}></div>
      </div>
    </div>
  );
}

export default Main;
