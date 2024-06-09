import React, { useState } from "react";
import "./App.css";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = (e) => {
    e.preventDefault();
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <form onSubmit={calculateAge}>
        <label>
          Enter your birthdate:
          <input type="date" value={birthdate} onChange={handleInputChange} />
        </label>
        <button type="submit">Calculate Age</button>
      </form>
      {age !== null && <h2>Your age is: {age}</h2>}
    </div>
  );
}

export default App;
