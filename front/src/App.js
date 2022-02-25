import React, { useRef, useState, useContext, useEffect } from "react";
import Store, { StoreProvider } from "./Context/todoContext";
import List from "./Components/List";
import Form from "./Components/Form";

const HOST = "http://localhost:8080/api";

function App() {
  return (
    <StoreProvider>
      <h3>To-Do List SOFKA U</h3>
      <table className="table table-bordered">
        <tr>
          <th>
            <Form HOST={HOST} />
            <List HOST={HOST} />
          </th>
        </tr>
      </table>
      <h3>To-Do List TRAINING</h3>
      <table className="table table-bordered">
        <tr>
          <th>
            <Form HOST={HOST} />
            <List HOST={HOST} />
          </th>
        </tr>
      </table>
    </StoreProvider>
  );
}
export default App;
