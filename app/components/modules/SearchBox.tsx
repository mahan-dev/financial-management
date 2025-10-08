"use client";
import React, { useState } from "react";
import styles from "@/modules/styles/searchBox/route.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchBox } from "@/app/helper/searchTransactions/searchHandler";
import SearchResult from "@/elements/SearchResult";

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");

  const { data } = useQuery({
    queryKey: ["transactions", search],
    queryFn: async () => searchBox(search),
    enabled: !!search,
  });

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="جستجو ..."
        onChange={(e) => setSearch(e.target.value.trim())}
      />

      <div className=" w-[180px] m-2 bg-gray-100 absolute shadow-md rounded-md top-16">
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
