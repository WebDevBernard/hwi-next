import { useDialog } from "@/hooks/useDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { CustomX } from "./CustomX";

export function QuoteDialog() {
  const { isOpen, onClose } = useDialog();
  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal>
      <DialogContent hideClose>
        <DialogHeader className="flex flex-row items-center justify-between mb-6 space-y-0">
          <DialogTitle>What kind of Insurance do you need today?</DialogTitle>
          <DialogClose>
            <CustomX />
          </DialogClose>
        </DialogHeader>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
