import { createContext, useContext, useState } from "react";
import db_livros from '../db/db_livros.json'
export const LivrosContext = createContext();

// eslint-disable-next-line react/prop-types
export default function LivrosProvider({ children }) {
  const [livros, setLivros] = useState(db_livros);

  return (
    <LivrosContext.Provider
      value={{ livros, setLivros }} >
      {children}
    </LivrosContext.Provider>
  );
} 

// eslint-disable-next-line react-refresh/only-export-components
export function useLivroContext() {
  const { livros, setLivros } = useContext(LivrosContext);
	return {
		livros,
		setLivros
	}
  
}