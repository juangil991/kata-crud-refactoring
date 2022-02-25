import React, { useState } from 'react';
import List from './List';
import { useForm } from "react-hook-form";



const AddList = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    

    const onSubmit=(data, e) =>{
        e.target.reset();
        props.setLists([
            ...props.Lists,data
        ])
    }

    return (<form className='row g-3' onSubmit={handleSubmit(onSubmit)}  >
        <div className='col-auto mt-4'>
            AGREGAR LISTA
        </div>
        <div className='col-auto'>
            <input type="text"
                className='mt-1'
                placeholder='Nombre de la lista'
                {...register("Name",{required:true, minLength:2})}
            />
        </div>
        <div className='col-auto'>
            <button className='btn btn-primary'>Agregar</button>
        </div>

    </form>

    );
}

export default AddList;