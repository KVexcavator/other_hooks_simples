import faker from "faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ol>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ol>
  )
}

export default function VirtualizedList() {
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={100} />
      <p>
        {item.name} — {item.email}
      </p>
    </div>
  );

  return <List data={bigList} renderItem={renderItem} renderEmpty={<p>Data empty!</p>}/>;
}
  