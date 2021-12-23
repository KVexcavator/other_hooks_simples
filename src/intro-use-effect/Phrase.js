import React, { useState, useEffect } from "react";

function Phrase (){
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  // еффект будет вызываться только для val
  useEffect(() => {
    console.log(`typing "${val}"`);
  },[val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  },[phrase]);

  useEffect(() => {
    console.log("меняются значения val или phrase");
  }, [val, phrase]);

  useEffect(() => {
    console.log("эффект вызывается в момент начального рендеринга");
  }, []);

  return(
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  )
}

export default Phrase;