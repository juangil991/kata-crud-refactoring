import React, {useEffect, useContext, useState} from 'react'
import Store from '../Context/todoContext';

const List = (props) => {
    
    const { dispatch, state: {todo} } = useContext(Store);
    const [listName,setListName]=useState(props.nombre);
    const currentList = todo.list.filter((item)=>listName===item.groupListId );
  
    useEffect(() => {
      fetch(props.HOST + "/todos"+"/")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [dispatch]);
  
  
    const onDelete = (id) => {

      fetch(props.HOST + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
      })
    };
  
    const onEdit = (todo) => {
      props.setValidate(true);
      dispatch({ type: "edit-item", item: todo })
    };
  
    const onChange = (event, todo) => {
      const request = {
        name: todo.name,
        id: todo.id,
        completed: event.target.checked,
        groupListId:listName
      };
      fetch(props.HOST + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
        });
    };
  
    const decorationDone = {
      textDecoration: 'line-through'
    };
    return <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>TAREA</td>
            <td>¿COMPLETADO?</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return <tr key={props.name} style={todo.completed ? decorationDone : {}}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td className='p-3'><input 
              className='form-check-input' 
              type="checkbox" defaultChecked={todo.completed} 
              onChange={(event) => onChange(event, todo)}></input></td>
              <td><button className='btn btn-danger' onClick={() => onDelete(todo.id)}>Eliminar</button></td>
              <td><button className='btn btn-secondary' onClick={() => onEdit(todo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }

  export default List;