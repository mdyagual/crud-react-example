import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const {register, handleSubmit, setValue, formState: {errors} } = useForm({
        defaultValues: props.prevUser
    })

    setValue('name', props.prevUser.name)
    setValue('username', props.prevUser.username)

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.prevUser.id
        props.updateUser(props.prevUser.id, data)

        //limpiar campos
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                {...register("name", {required: true })}
            />
            {errors.name && errors.name.type === "required" && <span>Required<br/></span> }

            <label>Username</label>
            <input 
                type="text" 
                name="username"
                {...register("username", {required: true})}
            />
            {errors.username && errors.username.type === "required" && <span>Required<br/></span>}
            <ul></ul>
            <button>Edit user</button>
        </form>
     );
}
 
export default EditUserForm;