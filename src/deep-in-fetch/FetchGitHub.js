import { useState } from 'react';
import  GitHubUser from './GitHubUser';
import SearchForm from "./SearchForm";
import UserRepositories from './UserRepositories';
import RepositoryReadme from './RepositoryReadme';

export default function FetchGitHub() {
  const [login, setLogin] = useState("KVexcavator");
  const [repo, setRepo] = useState("cash_flow_api");
  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
      <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}