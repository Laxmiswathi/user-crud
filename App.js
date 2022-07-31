import logo from './logo.svg';
import './App.css'
import React ,{useEffect,useState} from "react"
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import UserList from "./components/UserList";
import apiClient from "./http-common"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom';
//import {viewAllUser} from "../Action/User";
function App() {
  
  const [users,setUsers]=useState([]);
  
      
  useEffect(()=>{apiClient.get('/viewAllUser').then((response)=>{
    setUsers(response.data);
  })},[])

  
const [editing,setEditing]=useState(false);
const initialFormState = {
id:0,
username:'',
password:0,
usertype:'',

}
const [currentUser,setCurrentUser] 
   =useState(initialFormState);

   
async function addUser(user){
try{
const response=await apiClient.post('/addUser',user);
  setUsers([...users,response.data]);
  console.log(users);
  
}catch(err){
  console.log(err)
}

}



async function deleteUser(userId){
await apiClient.delete(`/deleteUser/${userId}`);
  setUsers(users.filter((user)=>user.userId !== userId));
 }

const editUser=(user)=>{

  setEditing(true);
    setCurrentUser
    ({id:user.id,name:user.name,
      password:user,usertype:user})
   
}

const updateUser = (id,updatedUser)=>{

  setEditing(false);
  apiClient.put(`/updateUser/${id}`,updatedUser).then((response)=>
  {

    console.log('user updated');
    setUsers(users.map((user)=>
  (user.id === id ? updatedUser : user)));
  })
  
}




return (
  <BrowserRouter>
  <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/users" className="navbar-brand">
        React App
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/user"} className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/addUser"} className="nav-link">
            Add User
          </Link>
        </li>
      </div>
    </nav>
    <div className="container mt-3">
      <Routes>
      <Route path='/' element={<UserList 
  userData={users} 
       editUsers={editUser}
       deleteUser={deleteUser} />} >

       </Route>
        <Route exact path="addUser" element={<AddUserForm addUser={addUser}/>} />
       
       <Route path='/user' element={<UserList 
  userData={users}
  editUsers={editUser}
       deleteUser={deleteUser} />}>

       </Route>
       <Route path="/users/:id" element={<edituserForm /> }></Route>
      </Routes>
    </div>
  
  </BrowserRouter>
  );
}

export default App;