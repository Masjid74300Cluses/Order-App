"use client";
import styles from "./Button.module.scss";

const Button = ({ onClick, children, className, ...props }) => {
  const classes = [styles.button, className].join(" ");
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};
export default Button;
