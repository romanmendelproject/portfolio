import React from "react";
import styles from "./Remote.module.css";
import stylesContainer from "../common/styles/Container.module.css";

function Remote() {
  return (
    <div className={styles.remoteBlock}>
      <div className={`${stylesContainer.container} ${styles.remoteContainer}`}>
        <h3 className={styles.text}>Ready for remote work</h3>
        <div className={stylesContainer.button}>offer me a job</div>
      </div>
    </div>
  );
}

export default Remote;
