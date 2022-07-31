import React, {useEffect,useState} from "react";
export default function EditUserForm(props){

    const [user,setUser]=useState(props.currentUser);

    const handleInputChange =(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value});
    }

    
    const submitHandler=(event)=>{event.preventDefault();
        props.updateUser(user.userId,user);
    }

    //useEffect(()=>{
        //setUser(props.currentUser)
    //},[props])
    return(
        <form onSubmit={submitHandler}>

            <label>userId</label>
            <h1>{props.currentUser.userId}</h1>

            <label>UserName</label>
            <input 
            type='text'
            name='userName'
            value={user.userName}
            onChange={handleInputChange}/>

            <label>Password</label>
            <input 
            type='password'
            name='Password'
            value={user.password}
            onChange={handleInputChange}/>

            <label>userType</label>
            <input 
            type='text'
            name='userType'
            value={user.userType}
            onChange={handleInputChange}/>

            <button>Update User</button>
            <button onClick={()=>props.setEditing(false)}
            className="button muted-button">Cancel</button>

        </form>
    )

    }