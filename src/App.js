import React,{useState} from 'react';
import UserTable from './components/UserTable';

//Cambio a arrow function
const App = () => {
  //Inicialización data
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  //Estado actual y modificación futura
  const [usersStatus,modifyUsers] = useState(usersData)



  //Inicialización visual
  return (
    //<div>Hola mundo~~~</div>
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">        
            <h2>Add user</h2>
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
