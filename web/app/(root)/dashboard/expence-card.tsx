import { ExpenceGroup } from "@/types/expence-group";
import React from "react";

const ExpenceCard = ({ group }: { group: ExpenceGroup }) => {
  return (
    <div className="bg-muted w-full h-full flex flex-col overflow-hidden aspect-video">
      {group.title}
      {group.emoji}
      {group.mode}
      {group.createdAt.toDate().toLocaleDateString()}
    </div>
  );
};

export default ExpenceCard;
