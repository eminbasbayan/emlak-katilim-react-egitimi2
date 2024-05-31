import { useState } from "react";

function App() {
  const [state, setState] = useState("Mehmet Doğan");
  
  let fullName = "Mehmet Doğan";

  function handleClick() {
    fullName = "Emin Başbayan";
    setState("Emin Başbayan")
    console.log(fullName);
  }

  console.log("re-rendered!");

  return (
    <div className="app">
      <h1>App</h1>
      <p>{state}</p>
      <button onClick={handleClick}>İsmi Değiştir!</button>
    </div>
  );
}

export default App;
