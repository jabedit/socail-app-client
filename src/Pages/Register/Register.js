import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
    const [error, setError] = useState('')

  const { createUser ,updateUserProfile ,  user} = useContext(AuthContext);
  


  const handleRegister = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const photoURL = form.photoURL.value
    
    createUser(email, password )
    .then(result => {
      const user = result.user
      if(user){
        toast.success('User SignUp Successfully')
        saveUser(user ,  photoURL, name)
      }
      console.log(user)
        setError('')
        form.reset()
        handleUserPhotoURLAndName(name, photoURL)

        const userInfo = {
          name : user?.displayName,
          email: user?.email
        }
        console.log(userInfo)
      })
    .catch(error => {
        const message = error.message
        setError(message)
    })
    
  }
  const handleUserPhotoURLAndName = (name, photoURL) =>{
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
    .then( () =>{})
    .catch(error => console.error(error))
  }
  const saveUser = (userInfo,   photoURL, name) =>{
    const user = {
       name: name,
       email: userInfo.email,
       user_img : photoURL
       
    }
  
  fetch('http://localhost:5000/abouts', {
      method: 'POST', 
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{

  })
}
  
  return (
    <div>
      <div className=" ">
        <div className=" ">
          <div className=" shadow-2xl bg-base-100  md:w-6/12 mx-auto mt-7 login-card">

            <div className="card-body">
               
              <form onSubmit={handleRegister}>
            
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">FullName</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Full Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Type Email"
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
                  
                </div>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    name="photoURL"
                    type="text"
                    placeholder="Enter PhotoURL"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn bg-indigo-500 border-0">Register</button>
                  
                </div>
                <label className="label">
                    <p> You already have an account?<Link className="underline text-blue-500"  to='/login'> Please Login </Link></p>
                  </label>
                <p className="text-orange-600"> {error}</p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
