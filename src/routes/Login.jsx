import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('davidvillegard@gmail.com');
    const [password, setPassword] = useState('albchdevv');

    const {loginUser} = useContext(UserContext);
    const navegate= useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('procesando form: ', email, password);
        try{
            await loginUser(email, password);
            console.log('usuario logeado');
            navegate('/');
        }catch(error){
            console.log(error);
        }
    };
      
    return(
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Ingrese email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Ingrese clave" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        </>
    );
};

export default Login;