'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

interface SidebarContextProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps>(undefined!);

export function SidebarProvider({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  const [isOpen, setOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext(): SidebarContextProps {
  const context = useContext(SidebarContext) as SidebarContextProps | undefined;

  if (!context) {
    throw new Error(
      'useSidebarContext should be used within the SidebarContext provider!',
    );
  }

  return context;
}
