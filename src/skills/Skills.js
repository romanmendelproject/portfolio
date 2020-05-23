import React from "react";
import styles from "./Skills.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import { useMediaPredicate } from "react-media-hook";

function Skills() {
  const biggerThan380 = useMediaPredicate("(max-width: 380px)");

  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsWraper}>
          <div
            className={`${styles.skills} ${biggerThan380 &&
              styles.container380}`}
          >
            <Skill
              title={"JS"}
              description={"Lorem Lorem LoremL oremLorem LoremLo remLorem"}
            />
            <Skill
              title={"CSS"}
              description={"Lorem Lorem LoremL oremLorem LoremLo remLorem"}
            />
            <Skill
              title={"REACT"}
              description={"Lorem Lorem LoremL oremLorem LoremLo remLorem"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
