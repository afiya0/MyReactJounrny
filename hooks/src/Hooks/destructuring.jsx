import React, { useState } from "react";

const Destructuring = () => {
  const [person, setPerson] = useState(["Alizan", 29, "CS"]);

  const [name, age, dept] = person;

  const change = () => {
    setPerson((prevPerson) =>
      prevPerson[0] === "Alizan"
        ? ["Anmaazz", 25, "SE"]
        : ["Alizan", 29, "CS"]
    );
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Department: {dept}</h1>

      <button onClick={change}>Change Person</button>
    </div>
  );
};

export default Destructuring;