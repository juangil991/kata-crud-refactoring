import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import Store, { StoreProvider } from "../Context/todoContext";



const AddList = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data, e) => {

        const request = {
            name: data.Name,
            id: null,
        };
        e.target.reset();
        fetch(props.HOST + "/list", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (<form className='row g-3' onSubmit={handleSubmit(onSubmit)}  >
        <div className='col-auto mt-4'>
            AGREGAR LISTA
        </div>
        <div className='col-auto'>
            <input type="text"
                className='mt-1'
                placeholder='Nombre de la lista'
                {...register("Name", { required: true, minLength: 2 })}
            />
        </div>
        <div className='col-auto'>
            <button className='btn btn-success'>Agregar</button>
        </div>

    </form>

    );
}

export default AddList;