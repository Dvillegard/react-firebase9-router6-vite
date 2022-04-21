import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";


const Register =() =>{

    const [email, setEmail] = useState('davidvillegard@marin.com');
    const [password, setPassword] = useState('albchdevv');

    const navegate = useNavigate();

    const {registerUser} = useContext(UserContext);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('procesando form: ', email, password);
        try{
            await registerUser(email, password);
            console.log('usuario creado');
            navegate('/');
        }catch(error){
            console.log(error);
        }
    };
    return(
       <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Ingrese email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Ingrese clave" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
       </>
    );
};

export default Register;