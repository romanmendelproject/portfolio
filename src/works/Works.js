import React from "react";
import styles from "./Works.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";

function Works() {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>My works</h2>
        <div className={styles.skills}>
          <Work
            title={"My project1"}
            description={"Lorem Lorem LoremL oremLorem LoremLo remLorem"}
          />
          <Work
            title={"My project2"}
            description={"Lorem Lorem LoremL oremLorem LoremLo remLorem"}
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
