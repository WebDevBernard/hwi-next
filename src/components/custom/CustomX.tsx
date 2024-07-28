import { Button } from "../ui/button";
import { X } from "lucide-react";
export function CustomX() {
  return (
    <Button className="h-7 w-7 p-0 rounded-full" variant="ghost">
      <X size={15} />
    </Button>
  );
}
