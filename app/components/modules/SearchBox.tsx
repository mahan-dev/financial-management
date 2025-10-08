"use client";
import React, { useState } from "react";
import styles from "@/modules/styles/searchBox/route.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchBox } from "@/app/helper/searchTransactions/searchHandler";
import SearchResult from "@/elements/SearchResult";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["transactions", search],
    queryFn: async () => searchBox(search.trim()),
    enabled: !!search,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__search}>
        <input
          type="text"
          placeholder="جستجو ..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <IoCloseCircleOutline
          className="text-[1.3rem] cursor-pointer"
          onClick={() => setSearch("")}
        />
      </div>

      <div className={styles.container__result}>
        {data
          ? data.data.map((item, index) => (
              <SearchResult key={index} data={item} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default SearchBox;
