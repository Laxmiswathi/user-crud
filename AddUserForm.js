
import React,{useState} from "react";
import { useDispatch } from "react-redux";
export default function AddUserForm(props){

    

    const initialFormState={
        userId:0,
        userName:'',
        password:'',
        userType:'',
        

    }
    const [user,setUser]=useState(initialFormState);
    const handleInputChange = (event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value});

        
    }
    const submitHandler=(event)=>{event.preventDefault();
        console.log("in submit handle");
        //if(!user.userId || !user.userName || !user.password || !user.userType)
        //return;
        console.log(user+'from adduserform')
        props.addUser(user);
        
        setUser(initialFormState);

}
return(
    <form onSubmit={submitHandler}>
        <label>UserId</label><br/>
        <input
        type='number'
        name='userId'
        value={user.userId}
        onChange={handleInputChange}/>
        <br/>

<label>UserName</label><br/>
        <input
        type='text'
        name='userName'
        value={user.userName}
        onChange={handleInputChange}/>
        <br/>
        
        <label>Password</label><br/>
        <input
        type='text'
        name='password'
        value={user.password}
        onChange={handleInputChange}/>
        <br/>
        
        <label>UserType</label><br/>
        <input
        type='text'
        name='userType'
        value={user.userType}
        onChange={handleInputChange}/>
        <br/>

    <button>Add new User</button>
<br></br>
        
    </form>
    
)
}