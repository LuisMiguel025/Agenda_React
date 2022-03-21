import React from "react";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <div className="titles">
        <h1 className="title">Contacts</h1>
        <h2 className="subtitle">Add Contacts</h2>
      </div>
      <Form />
      <List />
    </div>
  );
};

export default App;
