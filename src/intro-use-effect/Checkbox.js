import React, { useState, useEffect } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  /* Хук useEffect можно считать функцией, 
  которая выполняется после рендеринга. 
  Когда происходит рендеринг, мы получаем доступ 
  к текущим значениям состояния в компоненте(props, 
    state, refs и т.д.) и можем использовать их для чего-то еще.*/
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
      <hr />
    </>
  );   
}

export default Checkbox;
