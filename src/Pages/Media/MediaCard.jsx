import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useQuery } from '@tanstack/react-query';
import { useState } from "react";
import { useEffect } from "react";
import MediaComments from "./MediaComments";
import { Link } from "react-router-dom";


const MediaCard = ({ post }) => {
  const { user , loading} = useContext(AuthContext);
  const [comments, setComents] = useState([])
  const [likes, setLikes] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:5000/comments?comment_id=${post._id}`)
    .then(res => res.json())
    .then(data => setComents(data) )
  }, [comments])
//   const { data: comments = [], refetch, isLoading } = useQuery({
//     queryKey: ['comments'],
//     queryFn: async () => {
//         const res = await fetch(`http://localhost:5000/comments?comment_id=${post._id}`);
//         const data = await res.json();
//         return data;
//     }
// });
if(loading) {
  return <div className='flex justify-center'>
      <button className="btn loading">loading...</button>

  </div>
}

  const handlePostCommentLike = (e) =>{

    e.preventDefault()
    const comment = e.target.comments.value
    const comments = {
      comment: comment,
      user: user.displayName,
      userPhoto: user.photoURL,
      comment_id : post._id
      

    }
    if(user){
      fetch(`http://localhost:5000/comments`, {
                    method:'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(comments)
                    
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    toast.success('comment added')
                   
                })
    }
    else{
      toast.error('Please Login!')
    }

  }
  
  const updateLikes = (id, likes) =>{
   
      const like = likes + 1;
      
      const userLikes = {
          userLike: like
      }

    fetch(`http://localhost:5000/media/like/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userLikes)
    })
    .then(res => res.json())
    .then(result =>{
      console.log(result);
      
     
  })
    
      
  }
  return (
    <div className="p-5 rounded-lg shadow-2xl  my-4">
      <div>
        <div></div>
        <div className="flex py-2">
          <img style={{borderRadius: '50%'}} className="w-10 h-10 mr-3 " src={post.userPhoto} alt="" />
          <h4 className="font-semibold ">{post.userName}</h4>
        </div>
        <hr className=" bg-slate-300"/>
      </div>
      <div className="pt-3">
       <Link to={`/signlepost/${post._id}`}>
       <p>
          {post.postText.length < 200
            ? post.postText
            : post.postText.slice(0, 200) + "..."}
            <span className="text-purple-500">see more</span>
        </p>
        </Link>
        
        <img src={post.postImage} alt="img" />
      </div>
     
        <div className="flex justify-between">
          <div className="text-3xl">
            <button onClick={() => updateLikes(post._id, post.postLike)}
              className="text-blue-700 cursor-pointer hover:text-fuchsia-600"><AiFillHeart  /> {post.postLike}</button>
          </div>
        </div>
        <form onSubmit={handlePostCommentLike}>
        <div className="grid grid grid-cols-1 gap-4">
            {
              comments.map(userComment => <MediaComments userComment={userComment} key={userComment._id} />)
            }
        </div>
        <div className="form-control">
          <div className="input-group rounded-5xl">
            <input
              type="text"
              name="comments"
              placeholder="Add comment..."
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn  text-white  bg-purple-500">
              <FaRegComment />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MediaCard;
