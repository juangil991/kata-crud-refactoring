import React, { useState } from "react";
import { StoreProvider } from "./Context/todoContext";
import List from "./Components/List";
import Form from "./Components/Form";
import AddList from "./Components/AddList";

const HOST = "http://localhost:8080/api";

function App() {
  const [Lists, setLists] = useState([]);
  const [listName,setListName]=useState("");
  const hola=()=>{ 
    Lists.map((item)=>{
     setListName(item)
     console.log(listName)
    })

  }
  return (
    <StoreProvider>
      <AddList Lists={Lists} setLists={setLists} />
      <hr />
      <div>
      {Lists.map((nombre) => {
          console.log(List)
         return (
            <div key={nombre}>
              <Form HOST={HOST}
              nombre ={nombre}/>
              <List HOST={HOST} />
              <hr/>
            </div>           
          );
        })}
      </div>
    </StoreProvider>
  );
}
export default App;
