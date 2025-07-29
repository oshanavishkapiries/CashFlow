"use client";

import { useId, useState } from "react";
import { CircleDollarSign, Loader2, User, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  EmojiPicker,
  EmojiPickerSearch,
  EmojiPickerContent,
  EmojiPickerFooter,
} from "@/components/ui/emoji-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createExpenceGroup } from "@/services/expence-group.service";

export default function CreateExpenceGroupDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const [title, setTitle] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💲");
  const [selectedMode, setSelectedMode] = useState<"me" | "group">("me");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createExpenceGroup({
        mode: selectedMode,
        title: title,
        emoji: selectedEmoji,
      });
      setOpen(false);
      // Reset form
      setTitle("");
      setSelectedEmoji("💲");
      setSelectedMode("me");
    } catch (error) {
      console.error("Failed to create expense group:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="mb-2 flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <CircleDollarSign className="opacity-80" size={16} />
          </div>
          <DialogHeader className="mt-2">
            <DialogTitle className="text-left">
              Create Expence Group
            </DialogTitle>
            <DialogDescription className="text-left">
              Create a new expence group to track your expenses.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <RadioGroup
              className="grid-cols-2"
              defaultValue="me"
              value={selectedMode}
              onValueChange={(value) =>
                setSelectedMode(value as "me" | "group")
              }
            >
              {/* Individual */}
              <label className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/10 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="radio-me"
                  value="me"
                  className="sr-only after:absolute after:inset-0"
                />
                <div className="flex items-center gap-2">
                  <User size={16} className="text-muted-foreground" />
                  <p className="text-foreground text-sm font-medium">Me</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Personal expenses
                </p>
              </label>
              {/* Group */}
              <label className="border-input has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/10 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col gap-1 rounded-md border px-4 py-3 shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="radio-group"
                  value="group"
                  className="sr-only after:absolute after:inset-0"
                />
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-muted-foreground" />
                  <p className="text-foreground text-sm font-medium">Group</p>
                </div>
                <p className="text-muted-foreground text-sm">Shared expenses</p>
              </label>
            </RadioGroup>

            <div className="*:not-first:mt-2">
              <Label htmlFor={`title-${id}`}>Group Title</Label>
              <Input
                id={`title-${id}`}
                type="text"
                placeholder="Enter group title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="*:not-first:mt-2">
              <Label htmlFor={`emoji-${id}`}>Group Icon</Label>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-gray-100 border border-gray-200 text-4xl w-[50px] h-[50px] flex items-center justify-center">
                  {selectedEmoji}
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-[calc(100%-58px)] h-[50px]"
                    >
                      Choose Icon
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-fit p-0">
                    <EmojiPicker
                      className="h-[342px]"
                      onEmojiSelect={({ emoji }) => {
                        setSelectedEmoji(emoji);
                      }}
                    >
                      <EmojiPickerSearch />
                      <EmojiPickerContent />
                      <EmojiPickerFooter />
                    </EmojiPicker>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Create Group"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
