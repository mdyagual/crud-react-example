import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
    //Uso de react hook form
    const {register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    //ref={register({required: {value: true, message: "Campo requerido"}})}
                    //<div color='red'>{errors?.name?.required}</div>
                    //{errors?.name && errors.name.type === "required" && <span>Required</span>}
                    {...register("name", {required: true,maxLength: 30})}  
                />
                {errors.name && errors.name.type === "required" && <span>Required<br/></span> }

                              
                  
                
            <label>Username</label>
                <input 
                    type="text" 
                    name="username" 
                    //ref={register({required: {value: true, message: "Campo requerido"}})}
                    // {errors.username && errors.username.type === "required" && <span>Required</span>}
                    {...register("username", {required: true})}
                />
                {errors.username && errors.username.type === "required" && <span>Required<br/></span>}
                
                   
                
            <button>Add new user</button>
        </form>
    )
}


export default AddUserForm;