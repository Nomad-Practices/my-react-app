import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("destroyed");
    };
  }, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((curr) => !curr);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{!showing ? "SHOW" : "HIDE"}</button>
    </div>
  );
}

export default App;
