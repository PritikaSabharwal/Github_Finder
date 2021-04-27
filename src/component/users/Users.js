import React, {useContext} from 'react'
import UserItem from './useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubcontext'
 const Users =()=> {

     const githubContext=useContext(GithubContext);
     const {loading, users}=githubContext;

        if(loading){
            return <Spinner/>
        }
        else{
            return (
                <div style={userstyle}>
                   {users.map(user=>(
                       <UserItem  key ={user.id} user={user} />
                   ))} 
                </div>
            )
        
        }
      
}

const userstyle={
    display: 'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users
