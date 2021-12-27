import { useState } from "react";

export default function SearchForm({value, onSearch = v => v}){
  const [title, setTitle] = useState("");
  const submit = e => {
    e.preventDefault();
    onSearch(title);
    setTitle("");
  };
  return (
    <form onSubmit={submit}>
      <label>Enter Repo name:
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder={value}
          required
        />
        <button>Send</button>
      </label>
    </form>
  )
}
