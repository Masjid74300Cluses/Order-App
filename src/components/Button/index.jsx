"use client";
import styles from "./Button.module.scss";

const Button = ({ onClick, children, ...props }) => {
  return (
    <button onClick={onClick} className={styles.button} {...props}>
      {children}
    </button>
  );
};
export default Button;
