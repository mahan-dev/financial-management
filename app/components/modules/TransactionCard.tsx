import React from "react";

import { Profile } from "@/app/helper/myTransactions/ProfileHandler";
import styles from "@/modules/styles/transactionCard/route.module.css";

interface CardProps {
  profile: Profile[];
}

const TransactionCard = ({ profile }: CardProps) => {
  console.log(profile);
  return (
    <div className={styles.container}>
      {profile.map(({ title, description, price, _id }) => (
        <div className={styles.container__card} key={_id.toString()}>
          <span>{title}</span>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
