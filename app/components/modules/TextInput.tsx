import React from "react";
import styles from "@/modules/styles/textInput/route.module.css";

interface TextProps {
  name: string;
  title: string;
  type: string;
  textarea?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}
const TextInput = ({
  name,
  title,
  type,
  textarea,
  onChange,
  value,
}: TextProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{title}</label>
      {textarea ? (
        <textarea name={name} id={name} onChange={onChange} value={value} ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default TextInput;
