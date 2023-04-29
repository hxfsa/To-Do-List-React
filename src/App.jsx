import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm />
      <TaskList />
    </div>
  );
}

export default App;
