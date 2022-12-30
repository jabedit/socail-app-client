import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import './Login.css'
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState('')
  const { googleLogin, githubLogin , userSingUp,  user} = useContext(AuthContext);
  const navigate = useNavigate()
  const  location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleUserLogin =(event) =>{
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    userSingUp(email, password )
    .then(result => {
        const  user = result.user
        console.log(user);
       
          
      
        form.reset();
        
        setError('')
    })
    .catch(error => {
        const message = error.message
        setError(message)
    })
  }
  useEffect(()=>{
    if(user && user.uid){
      navigate(from, {replace: true})
    }
  }, [user, from, navigate])
  //google sign in
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user)
        if(user){
          const userinfo = {
            name: user.displayName,
            email: user.email,
            
         }
       
       fetch('https://socail-media-server-nu.vercel.app/abouts', {
           method: 'POST', 
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(userinfo)
       })
       .then(res => res.json())
       .then(data =>{
        
          toast.success('save user information in database')
       })
        }
        
      })
      .then((error) => console.error(error));
  };
  // github login
  

  
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100  login-card">
            <div className="card-body">
              <form onSubmit={handleUserLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  required
                  name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                  name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-purple-500 border-0">Login</button>
                </div>
                <label className="label">
                    <p> Are you new user?<Link className="underline text--600" to='/register'> Please Register </Link></p>
                </label>
                <p className="text-orange-600"> {error}</p>
                
              </form>
              <div className="">
                <button
                  onClick={handleGoogle}
                  className="text-2xl w-full bg-purple-500 px-2 py-2 rounded-xl font-bold  text-white hover:text-indigo-600"
                >
                  <FaGoogle  className="inline"/>  Sign In
                </button>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;