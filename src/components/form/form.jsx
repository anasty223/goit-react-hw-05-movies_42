import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("🦄 Please, enter text !");
      return;
    }
    onSubmit(query);

    reset();
  };
  const reset = () => {
    setQuery("");
  };
  const handleSetQuery = (e) => {
    setQuery(e.currentTarget.value);
  };
  return (
    <form className="form" onSubmit={onSubmitForm}>
      <input
        type="text"
        value={query}
        onChange={handleSetQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search video"
      />

      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}
