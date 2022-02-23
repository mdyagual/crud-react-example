import React from 'react'

 const UserTable = (props) => {
    console.log(props.users);
    return (
        <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {   //Implementación dinámica conforme se van agregando los usuarios
                props.users.map(user =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className='button muted-button'> Edit </button>
                            <button className='button muted-button'> Delete </button>
                        </td>
                    </tr> 
                ))
            }
            
        </tbody>    
    </table>);
}

export default UserTable
