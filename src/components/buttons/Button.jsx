import React from "react";
import styles from './Btn.module.css'

const Button = ({ onclick, text }) => {
  return (
    <button className={styles.btn} onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
