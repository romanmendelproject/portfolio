import React from "react";
import styles from "./Skills.module.css";
import stylesContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
  return (
    <div className={styles.skillsBlock}>
      <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
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
  );
}

export default Skills;
