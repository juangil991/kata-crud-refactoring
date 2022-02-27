import React, { useState, Fragment } from "react";
import Store, { StoreProvider } from "./Context/todoContext";
import List from "./Components/List";
import Form from "./Components/Form";
import AddList from "./Components/AddList";

const HOST = "http://localhost:8080/api";

function App() {
  const [Lists, setLists] = useState([]);
  const [listName, setListName] = useState("");
  const [validate, setValidate]=useState(false);

  React.useEffect(() => {
    obtenerDatos();
  });

  const obtenerDatos = async () => {
    const data = await fetch(HOST + "/list");
    const tables = await data.json();
    setLists(tables);
  };

  return (
    <StoreProvider>
      <AddList HOST={HOST} />
      <hr />
      <div>
        {Lists.map((nombre) => {
          return (
            <Fragment>
              <div key={nombre.id}>
                <Form HOST={HOST}
                 nombre={nombre.name} 
                 id={nombre.id} 
                 validate={validate}
                 setValidate={setValidate}
                 />
              </div>            
              <div >
              <List HOST={HOST} 
              nombre={nombre.name} 
              id={nombre.id}
              setValidate={setValidate}/>
            </div>
            </Fragment>
          );
        })}
      </div>
    </StoreProvider>
  );
}
export default App;
