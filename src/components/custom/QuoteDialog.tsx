import { useDialog } from "@/hooks/useDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";

export function QuoteDialog() {
  const { isOpen, onClose } = useDialog();
  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal>
      <DialogContent hideClose>
        <DialogHeader className="flex flex-row items-center justify-between mb-6 space-y-0">
          <DialogTitle>What kind of Insurance do you need today?</DialogTitle>
          <DialogClose asChild>
            <Button className="h-7 w-7 p-0 rounded-full" variant="ghost">
              <X size={15} />
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
