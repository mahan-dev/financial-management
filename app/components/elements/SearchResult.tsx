import React from "react";
import styles from "@/elements/styles/route.module.css";
import { FormValues } from "@/modules/interface/FormValues";

interface SearchResultProps {
  data: FormValues;
}

const SearchResult = ({ data }: SearchResultProps) => {

  if (!data) return <p>چیزی پیدا نشد</p>;
  return (
    <div className={styles.container}>
      <div className="flex flex-col gap-2">
        <div className="flex">
          <span>عنوان : </span> <p className="">{data.title}</p>
        </div>
        <div className="flex">
          <span>توضحیات : </span> <p className="">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
