import React,{useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
//Cambio a arrow function
const App = () => {
  //Inicialización data
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //Estado actual y modificación futura
  //users, setUsers
  const [usersStatus,modifyUsers] = useState(usersData)

  //------------------------------------Operaciones CRUD----------------------------------
  //Agregar usuario
  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    modifyUsers([...usersStatus,user])
  }

  // Editar usuario: editing, setEditing
  const [editStatus, doEditing] = useState(false)
  //currentUser,SetCurrentUser
  const [prevUser, modifyUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    doEditing(true)
    modifyUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    doEditing(false);
    modifyUsers(usersStatus.map(user =>(user.id === id ? updatedUser : user)))
  }


  //Inicialización visual
  return (
    //<div>Hola mundo~~~</div>
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
      {
           editStatus ?(
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
                currentUser={prevUser}
                updateUser={updateUser}
              />
            </div>
           ):(
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
           )
         }
      </div>
    </div>
  );

  

}


export default App;
