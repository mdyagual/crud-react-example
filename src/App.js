import React,{useState} from 'react';
import UserTable from './components/UserTable';
import {v4 as uuidv4} from 'uuid';
import AddUserForm from './components/AddUserForm';

//Cambio a arrow function
const App = () => {
  //Inicialización data
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //Estado actual y modificación futura
  const [usersStatus,modifyUsers] = useState(usersData)

  //------------------------------------Operaciones CRUD----------------------------------
  //Agregar usuario
  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    modifyUsers([...usersStatus,user])
  }


  //Inicialización visual
  return (
    //<div>Hola mundo~~~</div>
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">        
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          <div className="flex-large">
            <h2>View users</h2>  
            <UserTable users={usersStatus}/>       
          </div>
      </div>
    </div>
  );

  

}


export default App;
