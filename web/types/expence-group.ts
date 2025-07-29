import { Timestamp } from "firebase/firestore";

export type ExpenceGroup = {
  id: string;
  userId: string;
  title: string;
  emoji: string;
  mode: "me" | "group";
  createdAt: Timestamp;
};
