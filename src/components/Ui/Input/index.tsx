import { InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return <input className={styles.customInput} {...props} />;
};

export default Input;
