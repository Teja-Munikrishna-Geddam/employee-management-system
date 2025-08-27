import React from "react";
import FetchAllEmployee from "./components/FetchEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee Management System</h1>
      <AddEmployee />
      <FetchAllEmployee />
    </div>
  );
}

export default App;
