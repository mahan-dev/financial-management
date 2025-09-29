import React from "react";
import styles from "@/modules/styles/textInput/route.module.css";

interface TextProps {
  name: string;
  title: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  categories?: [];
}
const TextInput = ({ name, title, type, onChange, value }: TextProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;
