import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchBar}>
      <input
        type="text"
        name="search"
        id="search"
        value={input}
        onChange={handleChange}
        placeholder="Пошук фільмів..."
        className={css.input}
        autoComplete="off"
      />
      <button type="submit" className={css.button}>
        Пошук
      </button>
    </form>
  );
};

export default SearchBar;
