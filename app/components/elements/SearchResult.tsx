import React from "react";
import styles from "@/elements/styles/route.module.css";
import { FormValues } from "@/modules/interface/FormValues";
import { redirect } from "next/navigation";

interface SearchResultProps {
  data: FormValues;
}

const SearchResult = ({ data }: SearchResultProps) => {
  const { title, description, _id } = data;

  return (
    <div className={styles.container}>
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => redirect(`/dashboard/my-transactions/detailsPage/${_id}`)}
      >
        <div className="flex">
          <span>عنوان : </span> <p className="">{title}</p>
        </div>
        <div className="flex">
          <span>توضحیات : </span> <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
