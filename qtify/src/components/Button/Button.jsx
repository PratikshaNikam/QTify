import styles from "./Button.module.css";
import React from "react";
function Button({children}) {
  return (
   
      <button className={styles.feedbackButton} >{children}</button>
    
  )
}

export default Button;