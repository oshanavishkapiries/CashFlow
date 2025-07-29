import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import React from "react";
import CreateExpenceGroupDialog from "./crate-expence-group-dialog";

const AddButton = ({ className }: { className?: string }) => {
  return (
    <CreateExpenceGroupDialog>
      <Button
        className={cn(
          "rounded-lg min-md:w-30 w-10 h-10 flex items-center justify-center gap-2",
          className
        )}
      >
        <PlusIcon />
        <span className="hidden min-md:block">Add</span>
      </Button>
    </CreateExpenceGroupDialog>
  );
};

export default AddButton;
