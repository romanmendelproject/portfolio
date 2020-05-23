import React from "react";
import styles from "./Works.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";
import { useMediaPredicate } from "react-media-hook";

function Works() {
  const biggerThan760 = useMediaPredicate("(max-width: 760px)");
  return (
    <div className={`${styles.skillsBlock} ${biggerThan760 && styles.container760Block}`}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>My works</h2>
        <div className={styles.skillsWraper}>
          <div className={`${styles.skills} ${biggerThan760 && styles.container760Skills}`}>
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
    </div>
  );
}

export default Works;
