import React from "react";
import styles from "./Work.module.css";
import stylesContainer from "../../common/styles/Container.module.css";

function Work(props) {
  return (
    <div className={styles.work}>
      <div className={styles.workOne}>
        <img src="" alt="Картинка"></img>
        <div className={stylesContainer.button}>Смотреть</div>
      </div>
      <div className={`${styles.workOne} ${styles.workTwo}`}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Work;
