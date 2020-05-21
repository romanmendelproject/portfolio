import React from "react";
import styles from "./Remote.module.css";
import stylesContainer from "../common/styles/Container.module.css";

function Remote() {
  return (
    <div className={styles.remoteBlock}>
      <div className={`${stylesContainer.container} ${styles.remoteContainer}`}>
        <h3 className={styles.text}>Рассматриваю варианты удаленной работы</h3>
        <div className={stylesContainer.button}>Нанять меня</div>
      </div>
    </div>
  );
}

export default Remote;
