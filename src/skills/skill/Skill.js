import React from "react";
import styles from "./Skill.module.css";
import { useMediaPredicate } from "react-media-hook";

function Skill(props) {

  const biggerThan380 = useMediaPredicate("(max-width: 380px)");
  return (
    <div className={`${styles.skill} ${biggerThan380 &&
      styles.container380}`}>
      <div className={styles.icon}></div>
      <h3>{props.title}</h3>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
}

export default Skill;
