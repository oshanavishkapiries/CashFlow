import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type Props = {
  balance: number;
  onArrowUp: () => void;
  onArrowDown: () => void;
};

export function BalanceCard({ balance, onArrowUp, onArrowDown }: Props) {
  return (
    <div className="bg-dark_2 rounded-lg p-6 flex flex-col items-center w-full max-w-md">
      <div className="flex justify-between items-center w-full mb-2">
        <Button
          variant={"ghost"}
          onClick={onArrowUp}
          className="bg-dark_3 rounded-full"
          size={"icon"}
        >
          <FaArrowUp className="text-green-500" />
        </Button>
        <div className="text-center">
          <div className="text-xs text-gray-400">TOTAL BALANCE</div>
          <div className="text-3xl font-bold text-white truncate w-[200px]">RS.{balance}</div>
        </div>
        <Button
          variant={"ghost"}
          onClick={onArrowDown}
          className="bg-dark_3 rounded-full"
          size={"icon"}
        >
          <FaArrowDown className="text-red-500" />
        </Button>
      </div>
    </div>
  );
}
