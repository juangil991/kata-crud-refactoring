import React, {useRef} from 'react';
import { useForm } from "react-hook-form";



const AddList = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data, e) => {
        e.preventDefault();
        e.target.reset();
        const request = {
            name: data.Name,
            id: null,
        };
       
        fetch(props.HOST + "/list", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    

    return (<form className='row g-3' onSubmit={handleSubmit(onSubmit)} >
        <div className='col-auto mt-4'>
            AGREGAR LISTA
        </div>
        <div className='col-auto'>
            <input type="text"
                className='mt-1'
                placeholder='Nombre de la lista'
                {...register("Name", { required: true, minLength: 2 })}
            />
            <span className="text-danger text-small d-block mb-2">
             {errors.Name?.type === 'required' && "Minimo 2 Caracteres"}
             </span>
        </div>
        <div className='col-auto'>
            <button className='btn btn-success'>Agregar</button>
        </div>

    </form>

    );
}

export default AddList;