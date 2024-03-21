// Main
import React from 'react';
import { RefObject, createContext, useContext, useRef } from 'react';

// Interface
interface providerType {
  triggerFunction: RefObject<HTMLButtonElement>;
}

export const registerContext = createContext<providerType | null>(null);

export const useRegisterContext = () => {
  const context = useContext(registerContext);
  if (!context) throw new Error('Context is null');
  return context;
};

export default function RegisterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const triggerFunction = useRef<HTMLButtonElement>(null); // button ref
  return (
    <registerContext.Provider value={{ triggerFunction }}>
      {children}
    </registerContext.Provider>
  );
}
