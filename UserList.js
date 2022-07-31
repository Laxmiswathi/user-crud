import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RETRIEVE_USERS } from '../Action/types';
import {
    retrieveUsers,
    

}from '../Action/User'
export default function UserList(props){
   // const users = useSelector((state)=>state.users);
     const dispatch=useDispatch();
    // useEffect(()=>{
    //     dispatch(viewAllUser());
    //   },[]);


     //const dispatch=useDispatch();
    const [currentUser,setCurrentUser]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);

    const users= useSelector((state)=>state.users);
      
    useEffect(()=>{
        dispatch(retrieveUsers());
      },[]);

    
     const refreshData=()=>{
        setCurrentUser(null);
        setCurrentIndex(-1);
    } 
 

     const setActiveUser = (user,index)=>{
        setCurrentUser(user);
        setCurrentIndex(index);

     }  

return(
    <table border={4}>
        <thead>
            <tr>
                <th>UserId</th>
                <th>UserName</th>
                <th>Password</th>
                <th>UserType</th>
                
            </tr>
        </thead>
        <tbody>
             {props.userData?.length > 0 ? ( 
            
                props.userData.map((user)=>(
                    <tr key={user.userId}>
                        <td>{user.userId}</td>
                        
                        <td>{user.userName}</td>
                        <td>{user.password}</td>
                        <td>{user.userType}</td>
                        
                        <td>
                            <button
                        onClick={()=>{props.editUser(user)}}
                        className="button muted-button">Edit</button></td>
                        <td><button
                            onClick={()=>{props.deleteUser(user.userId)}}
                            className="button muted-button">Delete</button></td>
                            </tr>))):(
                                <tr>
                                    <td colSpan={4}>No Users</td>
                                    </tr>
                            )}

                    
        </tbody>
    </table>
)
                            }