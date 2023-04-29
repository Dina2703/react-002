import React from "react";
import "./myStyles.css";
import styles from "./appStyles.module.css";

function StyleSheet() {
  return (
    <div>
      <h2 className="primary">Styled by regular Stylesheet</h2>
      <h2 className={styles.success}>Styled by modular Stylesheet</h2>
    </div>
  );
}

export default StyleSheet;
