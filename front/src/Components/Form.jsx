import React, { useContext, useState, useRef,Fragment } from 'react';
import Store from '../Context/todoContext';


const Form = (props) => {
  const formRef = useRef(null);
  const { dispatch, state: { todo } } = useContext(Store);
  const item = todo.item;
  const [state, setState] = useState(item);
  const [listName,setListName]=useState(props.nombre);
  

  const onAdd = (event) => {
    event.preventDefault();
    console.log(listName.Name)

    const request = {
      name: state.name,
      id: null,
      completed: false
    };

    fetch(props.HOST + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted
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
        setState({ name: "" });
        formRef.current.reset();
      });
  }

  return( 
    <Fragment>
      <form className='row g-3'key={props.nombre}>
        <div className='col-auto'>
            <h1>{listName.Name}</h1>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger mx-2' >Eliminar</button>
        </div>
    </form>
    <hr/>
    <form className='row g-3' ref={formRef}>
    <div className='col-auto mt-4'>
      AGREGAR To-Do 
    </div>
    <div className='col-auto'>
      <input type="text"
       name='name' 
       className='form-control' 
       placeholder='¿Que piensas Hacer Hoy?'
       defaultValue={item.name}
       onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }}
       />
    </div>
    <div className='col-auto'>
    {item.id && <button className='btn btn-primary mb-3' onClick={onEdit} >Actualizar</button>}
    {!item.id && <button className='btn btn-primary mb-3' onClick={onAdd} >Crear</button>}
    </div>

  </form>
  </Fragment>)
}

export default Form;