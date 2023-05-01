import React, { useState } from 'react';
import './Login.css';
import firebase from './firebase.js';

const Login = () => {
     const [isSignUp, setIsSignUp] = useState(false);

     const handleSignIn = (event) => {
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
          firebase.auth().signInWithEmailAndPassword(email, password)
               .then((userCredential) => {
                    // Connexion réussie, faire quelque chose ici si nécessaire
                    console.log('Connexion réussie !');
               })
               .catch((error) => {
                    // Gérer les erreurs de connexion ici
                    console.error(error);
               });
     };

     const toggleSignUp = () => {
          setIsSignUp(!isSignUp);
     };

     return (
          <div className="login-container">
               <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
                    <div className="form-container sign-up-container">
                         <form action="#">
                              <h1>Create Account</h1>
                              <div className="social-container">
                                   <a href="#" className="social">
                                        <i className="fab fa-facebook-f"></i>
                                   </a>
                                   <a href="#" className="social">
                                        <i className="fab fa-google-plus-g"></i>
                                   </a>
                                   <a href="#" className="social">
                                        <i className="fab fa-linkedin-in"></i>
                                   </a>
                              </div>
                              <span>or use your email for registration</span>
                              <input type="text" placeholder="Name" />
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />
                              <button>Sign Up</button>
                         </form>
                    </div>
                    <div className="form-container sign-in-container">
                         <form action="#">
                              <form onSubmit={handleSignIn}>
                              <h1>Sign in</h1>
                              <div className="social-container">
                                   <a href="#" className="social">
                                        <i className="fab fa-facebook-f"></i>
                                   </a>
                                   <a href="#" className="social">
                                        <i className="fab fa-google-plus-g"></i>
                                   </a>
                                   <a href="#" className="social">
                                        <i className="fab fa-linkedin-in"></i>
                                   </a>
                              </div>
                              <span>or use your account</span>
                              <input type="email" placeholder="Email" />
                              <input type="password" placeholder="Password" />
                              <a href="10">Forgot your password?</a>
                              <button type="submit">Sign In</button>
                                   
                              </form>
                         </form>
                    </div>
                    <div className="overlay-container">
                         <div className="overlay">
                              <div className="overlay-panel overlay-left">
                                   <h1>Welcome Back!</h1>
                                   <p>To keep connected with us please login with your personal info</p>
                                   <button className="ghost" onClick={toggleSignUp} id="signIn">
                                        Sign In
                                   </button>
                              </div>
                              <div className="overlay-panel overlay-right">
                                   <h1>Hello, Friend!</h1>
                                   <p>Enter your personal details and start journey with us</p>
                                   <button className="ghost" onClick={toggleSignUp} id="signUp">
                                        Sign Up
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;
