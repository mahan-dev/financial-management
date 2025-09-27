import React from "react";
import Banner from "@/modules/Banner";
import Management from "@/modules/Management";
import styles from "@/modules/styles/home.module.css"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner title="مدیریت مالی" />
      <Management title="مدیریت آسان" />
    </div>
  );
};

export default HomePage;
