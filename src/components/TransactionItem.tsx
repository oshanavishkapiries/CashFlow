import { FaCar } from "react-icons/fa";
import { Transaction } from "@/data/transactions";
import { motion } from "framer-motion";

export function TransactionItem({ tx , delay=0 }: { tx: Transaction , delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 80 }}
      className="flex items-center bg-dark_2 rounded-md p-3 mb-3"
    >
      <div className="bg-dark_3 rounded-md p-3 mr-3">
        <FaCar className="text-2xl text-gray-300" />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-white">{tx.title}</div>
        <div className="text-xs text-gray-400">{new Date(tx.date).toLocaleDateString()}</div>
      </div>
      <div className="flex flex-col items-end">
        <div className={`font-semibold ${tx.type === "income" ? "text-green-500" : "text-red-500"}`}>
          {tx.type === "income" ? "+" : "-"} RS {tx.amount}
        </div>
        <div className="text-xs text-gray-400">{tx.category}</div>
      </div>
    </motion.div>
  );
}