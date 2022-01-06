import React,{useState} from 'react';
const Login = () => {
    const[name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     return (
        <>
           <table>
            <form action="">
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" id="name" value={name} autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} autoComplete="off"></input>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" autoComplete="off" value={password}></input>
                </div>

                <button type="submit">Login</button>
            </form>
            </table>
        </>
    )
}

export default Login;