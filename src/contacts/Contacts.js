import React from "react";
import styles from "./Contacts.module.css";
import stylesContainer from "../common/styles/Container.module.css";

function Contacts() {
  return (
    <div className={styles.contactsBlock}>
      <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
        <h3 className={styles.text}>Контакты</h3>
        <div className={styles.main}>
          <form className={styles.form}>
            <input className={styles.input} type="text"></input>
            <input className={styles.input} type="text"></input>
            <textarea className={styles.textArea}name="comment" placeholder="Комментарий"></textarea>
          </form>
        </div>
        <div className={stylesContainer.button}>Отправить</div>
      </div>
    </div>
  );
}

export default Contacts;
