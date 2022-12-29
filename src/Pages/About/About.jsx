import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import AboutModal from "./AboutModal";

const About = () => {
  const { user } = useContext(AuthContext);
  const [userAbout, setUserAbout] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:5000/abouts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserAbout(data[0]));
  }, [userAbout]);
  if(!userAbout) {
    return <div className='flex justify-center'>
        <button className="btn loading">loading</button>

    </div>
}
  return (
    <div className="md:w-1/3 mx-auto ">
      <div className="shadow-2xl text-center pb-10 mb-10 rounded-3xl">
        <div className="flex justify-end">
          <label htmlFor="my-modal-3" className=" px-2 py-1 text-white rounded-lg  bg-purple-500">
            Edit-Profile
          </label>
        </div>
        <div>
          <img src={userAbout?.user_img} alt="" />
        </div>
        <div className="font-semibold text-2xl">
          <h2 className="pt-2">Name : {userAbout?.name}</h2>
          <h2 className="pt-2">Email : {userAbout?.email}</h2>
          <h2 className="pt-2">University : {userAbout?.university}</h2>
          <h2 className="pt-2">Address : {userAbout?.address}</h2>
        </div>

        <AboutModal userAbout={userAbout} key={userAbout?._id} />
      </div>
    </div>
  );
};

export default About;
