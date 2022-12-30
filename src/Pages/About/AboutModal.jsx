import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";

const AboutModal = ({userAbout}) => {
  const {name, email, user_img, _id} = userAbout
  
  const {user} = useContext(AuthContext)
    const imgbbKey = process.env.REACT_APP_imgbb_key;
   
  const handleEditProfile = (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const university = form.university.value
    const address = form.address.value 
    const profile = {
      name: name,
      email: email,
      university:university,
      address:address
  }
  fetch(`https://socail-media-server-nu.vercel.app/abouts/profile/${_id}`, {
      method:'PUT',
      headers: {
          'content-type' : 'application/json'

      },
      body: JSON.stringify(profile)
      
  })
  .then(res => res.json())
  .then(result =>{
      console.log(result);
      toast.success('Profile Updated is successfully done!')
  })
    // const user_img = form.user_img.files[0]

    // const formData = new FormData()
    // formData.append('user_img',user_img )
       
    //     const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(imgData => {
           
    //         if(imgData.success){
    //             const profile = {
    //                 user_img: imgData.data.url,
    //                 name: name,
    //                 email: email,
    //                 university:university,
    //                 address:address
                    
                    
    //             }
    //             fetch(`https://socail-media-server-nu.vercel.app/abouts/profile/${_id}`, {
    //                 method:'PUT',
    //                 headers: {
    //                     'content-type' : 'application/json'

    //                 },
    //                 body: JSON.stringify(profile)
                    
    //             })
    //             .then(res => res.json())
    //             .then(result =>{
    //                 console.log(result);
    //                 toast.success('Profile Updated is successfully done!')
                    
                   
    //             })
    //         }
           
    //     })
        e.target.reset()

  }
   
  return (
    <div>
      
      <input type="checkbox" id="my-modal-3" className="modal-toggle "  />
      <div className="modal  ">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleEditProfile} action="" className="p-5">
            {/* <div className=" form-control">
             <input type="file" name="user_img" placeholder="Type here" className="input w-full   input-bordered"/>
            </div> */}
            <div className=" form-control">
             <input type="text" name="name" placeholder="Tyour Name" defaultValue={name} className="input w-full input-bordered" />
            </div>
            <div className=" form-control">
             <input type="text" name="email" placeholder=" Your Email" defaultValue={email} className="input w-full input-bordered" />
            </div>
            <div className=" form-control">
             <input type="text" name="university" placeholder="Your University" className="input w-full input-bordered" />
            </div>
            <div className=" form-control">
             <input type="text"  name="address" placeholder="Your Address" className="input w-full input-bordered" />
            </div>
            
             <input type="submit"  value="Submit" className="input w-full input-bordered bg-purple-500 text-2xl font-bold text-white" />
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
