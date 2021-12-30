import { useState } from "react";

export function UserDetails( data ) {
  return (
    <div>
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}

export function SearchForm({value, onSearch = v => v}){
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

export function List({data}){
  const items = data.map((item) => {
    let name = item.name
    return (<li key={name}>{name}</li>);
  });
  return (
    <ul>{items}</ul>
  )
}