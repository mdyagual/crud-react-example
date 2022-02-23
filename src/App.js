import React,{useState,useEffect} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
//Cambio a arrow function
const KEY='UserApp.user'
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
  
  
  //Inicialización con user effect para local storage
  useEffect(()=>{
      const storedUsers=JSON.parse(localStorage.getItem(KEY));
      if (storedUsers){ //Si tiene algo
          modifyUsers(storedUsers);
      }
  },[])



  //Para no perder lo almacenado en el local storage
  useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(usersStatus))
  },[usersStatus]);


  //------------------------------------Operaciones CRUD----------------------------------
  //Agregar usuario
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
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

  //Eliminar usuario
  const deleteUser = (id) => {
    modifyUsers(usersStatus.filter(user => user.id !== id))
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
                prevUser={prevUser}
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
         
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={usersStatus} 
            deleteUser={deleteUser}            
            editRow={editRow}
            ></UserTable>
        </div>
      </div>
    </div>

      
    
  );

  

}


export default App;
