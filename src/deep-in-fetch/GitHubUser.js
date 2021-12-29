import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";

export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderError={error => {
        // handle error
        return <p>Something went wrong... {error.message}</p>;
      }}
      renderSuccess={UserDetails}
    />
  );
}

function UserDetails({ data }) {
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
      <UserRepositories
        login={data.login}
        onSelect={repoName => console.log(`${repoName} selected`)}
      />
    </div>
  );
}