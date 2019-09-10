import React, { useState } from 'react';
import './App.css';
import AddField from "./form";

function App() {

  const [team, setTeam] = useState(
    {
      name: "",
      email: "",
      role: ""
    }
    );

  return (
    <div className="App">
      <AddField />
    </div>
  );
}

export default App;
