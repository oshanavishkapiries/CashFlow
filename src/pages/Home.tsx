import { useState } from "react";
import { transactions } from "../data/transactions";
import { BalanceCard } from "../components/BalanceCard";
import { TransactionList } from "../components/TransactionList";
import { BottomNav } from "../components/BottomNav";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [balance, setBalance] = useState(5000);

  // Event handlers (stubbed for now)
  const handleArrowUp = () => {
    // TODO: implement logic
  };
  const handleArrowDown = () => {
    // TODO: implement logic
  };

  return (
    <div className="w-full h-screen bg-dark_1 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center">
        <BalanceCard balance={balance} onArrowUp={handleArrowUp} onArrowDown={handleArrowDown} />
        <div className="mt-8 w-full flex flex-col items-center">
          <div className="w-full max-w-md h-[calc(100vh-280px)] overflow-y-auto scrollbar-hide">
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;