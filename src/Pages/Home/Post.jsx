import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';




const Post = () => {
    const {user} = useContext(AuthContext)
    const imgbbKey = process.env.REACT_APP_imgbb_key;
    
    const handleSocailPost = (e) =>{
        e.preventDefault()
        const userText = e.target.userText.value
        const image =  e.target.userImg.files[0]
        const formData = new FormData()
        formData.append('image',image )
       
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
           
            if(imgData.success && user){
                const post = {
                    postImage: imgData.data.url,
                    postText : userText,
                    userName: user?.displayName,
                    userPhoto: user?.photoURL,
                    userEmail: user?.email,
                    postLike: 0,
                    postComment: 0,
                    postShare: 0,
                    postTime: new Date().toLocaleString()
                    
                }
                fetch(`https://socail-media-server-nu.vercel.app/media`, {
                    method:'POST',
                    headers: {
                        'content-type' : 'application/json'

                    },
                    body: JSON.stringify(post)
                    
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success('Post is successfully done!')
                    
                   
                })
            }
            else{
                toast.error('Please  login !')
            }
        })
        e.target.reset()
    }
    
    return (
        <div className='  bg-white rounded-lg shadow-2xl pt-5 p-5'>
            <form onSubmit={handleSocailPost}>
                <div>
                    <textarea style={{border: '.5px solid #2e2e2e'}} name="userText" className="textarea  w-full" placeholder="Write Now....."></textarea>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <input name="userImg" type="file"  className="file-input file-input-bordered file-input-sm w-full max-w-xs  " />
                    </div>
                    <div>
                        <input type='submit' className='bg-purple-500 px-3 py-1 rounded-md text-black font-semibold' value="Add Post" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Post;