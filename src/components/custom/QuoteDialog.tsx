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
import { HouseIcon } from "lucide-react";
export function QuoteDialog() {
  const { isOpen, onClose } = useDialog();
  return (
    <Dialog onOpenChange={onClose} open={isOpen} modal>
      <DialogContent
        hideClose
        className="overflow-y-scroll max-h-screen md:max-h-[90%]"
      >
        <DialogHeader className="flex flex-row items-center justify-between mb-6 space-y-0">
          <DialogTitle>What kind of Insurance do you need today?</DialogTitle>
          <DialogClose asChild>
            <Button className="h-7 w-7 p-0 rounded-full" variant="ghost">
              <X size={15} />
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogDescription className="space-y-4">
          <h2>Home Insurance</h2>
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={24} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={24} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={24} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={24} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={24} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>
          <h2>Auto Insurance</h2>
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4 select-none cursor-pointer">
            <HouseIcon size={36} />
            <div className="flex-1 space-y-1">
              <h2 className="text-sm font-bold leading-none">
                Tenant Insurance
              </h2>
              <p className="text-sm text-muted-foreground">
                For renteres of (almost) any kind of residential property
              </p>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
