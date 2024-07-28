"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  data: any;
  setData: (data: any) => void;
}

const DialogContext = createContext<DialogProps | undefined>(undefined);

const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>({});

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, onOpen, onClose, data, setData }}>
      {children}
    </DialogContext.Provider>
  );
};

const useDialog = (): DialogProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export { DialogProvider, useDialog };
