export type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  icon: string;
};

export const transactions: Transaction[] = [
  {
    id: "1",
    title: "Electricity Bill",
    date: "2025-04-28",
    amount: 300,
    type: "income",
    category: "Transport",
    icon: "FaCar",
  },
  {
    id: "2",
    title: "Electricity Bill",
    date: "2025-04-28",
    amount: 300,
    type: "expense",
    category: "Transport",
    icon: "FaCar",
  },
  {
    id: "3",
    title: "Gas Bill",
    date: "2025-05-01",
    amount: 120,
    type: "expense",
    category: "Utilities",
    icon: "FaGasPump",
  },
  {
    id: "4",
    title: "Salary",
    date: "2025-04-28",
    amount: 5000,
    type: "income",
    category: "Work",
    icon: "FaBriefcase",
  },
  {
    id: "5",
    title: "Phone Bill",
    date: "2025-05-01",
    amount: 50,
    type: "expense",
    category: "Communication",
    icon: "FaMobileAlt",
  },
  {
    id: "6",
    title: "Water Bill",
    date: "2025-05-01",
    amount: 50,
    type: "expense",
    category: "Utilities",
    icon: "FaTint",
  },
  {
    id: "7",
    title: "Groceries",
    date: "2025-05-01",
    amount: 250,
    type: "expense",
    category: "Food",
    icon: "FaShoppingBasket",
  },
  {
    id: "8",
    title: "Travel",
    date: "2025-05-01",
    amount: 500,
    type: "expense",
    category: "Travel",
    icon: "FaPassport",
  },
];
