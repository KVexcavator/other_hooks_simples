import { useState } from 'react';
import  GitHubUser from './GitHubUser';
import SearchForm from "./SearchForm";

export default function FetchGitHub() {
  const [login, setLogin] = useState("KVexcavator");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}