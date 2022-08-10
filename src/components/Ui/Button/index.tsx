import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return <button className={styles.customButton} {...props} />;
};

export default Button;
