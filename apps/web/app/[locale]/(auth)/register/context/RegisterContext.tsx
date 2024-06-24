import { type RefObject, createContext, useContext, useRef } from "react";

export const registerContext = createContext<{
	triggerFunction: RefObject<HTMLButtonElement>;
} | null>(null);

export default function RegisterContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const triggerFunction = useRef<HTMLButtonElement>(null);
	return (
		<registerContext.Provider value={{ triggerFunction }}>
			{children}
		</registerContext.Provider>
	);
}

export const useRegisterContext = () => {
	const context = useContext(registerContext);
	if (!context) throw new Error("Context is null");
	return context;
};
