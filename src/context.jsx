import { createContext } from "react";

export const CountContext = createContext (0);




//To use it, wrap anyone that wants to use the teleported value inside a provider.
// CountContext.Provider, CountRenderer, 