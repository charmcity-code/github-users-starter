import { useState } from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <>
      <h1>GitHub Users</h1>
      <Form />
      <CardList />
    </>
  );
}

export default App;
