import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { UserContext } from '../context/UserProvider';


const Navbar = () => {


    const {user, signOutUser} = useContext(UserContext);

    const handleClickLogout = async() => {
        try{
            await signOutUser();
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            
            {
                user ?(
                    <>
                <NavLink to='/'>Inicio | </NavLink>
                <button onClick={handleClickLogout}>LogOut</button>
                </>
                ):(
               <>
                <NavLink to='/login'>Login | </NavLink>
                <NavLink to='/register'>Register | </NavLink>
               </>
                )}
          
           
        </div>
    );
};

export default Navbar;