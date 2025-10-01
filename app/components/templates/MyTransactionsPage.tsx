import React from "react";

import { UserProfile } from "@/helper/myTransactions/ProfileHandler";
import TransactionCard from "@/modules/TransactionCard";

interface TransactionProps {
  profiles: UserProfile;
}
const MyTransactionsPage = async ({ profiles }: TransactionProps) => {
  console.log(profiles);
  return (
    <section>
      <h2 className="bg-blue-200 text-blue-600 text-[1.2rem] font-semibold rounded-md p-2">
        تراکنش ها
      </h2>

      <TransactionCard profile={profiles.profiles} />
    </section>
  );
};

export default MyTransactionsPage;
