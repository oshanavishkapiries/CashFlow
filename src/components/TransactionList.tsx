import { Transaction } from "@/data/transactions";
import { TransactionItem } from "@/components/TransactionItem";

export function TransactionList({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <div className="w-full max-w-md">
      <div className="text-white text-lg font-semibold mb-4">
        Recent Transaction
      </div>
      {transactions.length === 0 ? (
        <div className="text-gray-400 text-center">
          No transactions available
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} tx={tx} delay={Number(tx.id) * 0.1} />
          ))}
        </div>
      )}
    </div>
  );
}
