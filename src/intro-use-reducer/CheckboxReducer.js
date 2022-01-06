import React, { useReducer } from "react";

function CheckboxReducer() {
  const [checked, toggle] = useReducer( checked => !checked, false);
 
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "checked" : "not checked"}
      <hr />
    </>
  );   
}

export default CheckboxReducer;