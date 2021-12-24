import React, { useState, memo } from "react";

const Cat = ({ name, meow = f => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};
// memo отображаться только при изменении его свойств
// без него прикаждом говом добавлении перерендятся все записи
// Второй аргумент— предикат. Предикат — функция,возвращает true/false.
// memo(Cat, () => true) будет отображаться один раз, а затем никогда
// memo(Cat, () => false) будет обображаться всегда
// Только когда предикат возвращает false , Cat отображается заново.
const PureCat = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);

function App() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={name => console.log(`${name} has meowed`)} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
}

export default App;