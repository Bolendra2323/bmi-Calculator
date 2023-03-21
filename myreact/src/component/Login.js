import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
    return(
        <div>
            <h1>First do successfull Login only after you can access other pages</h1>
            <h1>LogIn Page</h1>
            <input type="text"/><br />
            <input type="text"/><br />
            <button onClick={login}>LogIn</button>
        </div>
    )
}

export default Login;