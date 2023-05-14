import { useState } from "react";
import {
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onAuthStateChanged,
     signOut,
} from "firebase/auth";
import { auth } from "../Firebase";
import "./Login.css";

function Login() {
     const [registerEmail, setRegisterEmail] = useState("");
     const [registerPassword, setRegisterPassword] = useState("");
     const [loginEmail, setLoginEmail] = useState("");
     const [loginPassword, setLoginPassword] = useState("");
     const [user, setUser] = useState({});

     onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
     });

     const register = async () => {
          try {
               const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerPassword
               );
               console.log(user);
          } catch (error) {
               console.log(error.message);
          }
     };

     const login = async () => {
          try {
               const user = await signInWithEmailAndPassword(
                    auth,
                    loginEmail,
                    loginPassword
               );
               console.log(user);
          } catch (error) {
               console.log(error.message);
          }
     };

     const logout = async () => {
          await signOut(auth);
     };

     return (

          <div className="login-container">
               <div>
                    <div class="shape"></div>
                    <div class="shape"></div>
               </div>
               <form>
               <div>
                    <h3> Register User </h3>
                    <input
                         placeholder="Email..."
                         onChange={(event) => {
                              setRegisterEmail(event.target.value);
                         }}
                         />
                    <input
                         placeholder="Password..."
                         onChange={(event) => {
                              setRegisterPassword(event.target.value);
                         }}
                         />
                    <button onClick={register}> Create User</button>
               </div>

               <div>
                    <h3> Login </h3>                   
                    <input
                         placeholder="Email..."
                         onChange={(event) => {
                              setLoginEmail(event.target.value);
                         }}
                         />
                    <input
                         placeholder="Password..."
                         onChange={(event) => {
                              setLoginPassword(event.target.value);
                         }}
                         />
                    <button onClick={login}> Login</button>
               </div>

               <h4 className="user"> User Logged In: </h4>
               <p className="user-email">{user?.email}</p>

               <button className="logout-btn" onClick={logout}> Sign Out </button>

               </form>
          </div>
     );
}

export default Login;
