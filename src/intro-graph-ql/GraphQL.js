import { useState, useEffect } from "react";
import { GraphQLClient} from "graphql-request";
import { SearchForm, UserDetails, List } from './components';

const query = `
  query findRepos($login: String!) {
    user(login: $login) {
      login
      name
      location
      avatar_url: avatarUrl
      repositories(first: 100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`

const client = new GraphQLClient(
  "https://api.github.com/graphql",
  {
    headers: {
      authorization: `Bearer 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`
    }
  }
);

// client
//   .request(query, { login: "KVexcavator" })
//   .then(results => JSON.stringify(results, null, 2))
//   .then(console.log)
//   .catch(console.error);

export default function GraphQL() {
  const [login, setLogin] = useState("KVexcavator");
  const [userData, setUserData] = useState();
  useEffect(() => {
    client
      .request(query, { login })
      .then(({user}) => user )
      .then(setUserData)
      .catch(console.error);
  }, [client, query, login]);
  console.log(userData)

  if (!userData) return <p>loading...</p>;

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <UserDetails {...userData} />
      <p>{userData.repositories.totalCount} — repos</p>
      <List
        data={userData.repositories.nodes}
      />
    </>
  )
}


/*
Чтобы получить личный токен доступа для запросов GraphQL на GitHub, в меню
Settings > Developer Settings > Personal Access Tokens . В этой форме вы можете
создать токен доступа с определенными правами. Для выполнения запросов
GraphQL токен должен иметь следующий доступ для чтения:
user;
public_repo;
repo;
repo_deployment;
repo:status;
read:repo_hook;
read:org;
read:public_key;
read:gpg_key.
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
*/