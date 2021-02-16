import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
import Member from "./Member";

function App() {

  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Form team={team} pushMember={setTeam} />

      <Member team={team} />
    </div>
  );
}

export default App;
