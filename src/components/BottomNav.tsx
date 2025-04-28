import { FaDollarSign } from "react-icons/fa";

export function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 w-full bg-dark_2 py-3 flex justify-center">
      <div className="flex flex-col items-center">
        <FaDollarSign className="text-white text-2xl" />
        <span className="text-xs text-white">money</span>
      </div>
    </nav>
  );
}