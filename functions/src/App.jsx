import React from "react";

const App = () => {
  function inp(e) {
    console.log(e.target.value);
  }

  return <input type="text" placeholder="see sinner" onChange={inp} />;
};

export default App;
