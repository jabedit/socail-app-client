import React from 'react';

const MediaComments = ({userComment}) => {
    const {userPhoto, user, comment} = userComment
    
    return (
        <div className='flex ml-10 '>
            <div>
                <img style={{borderRadius: '50%'}} className='h-10 w-10  ' src={userPhoto} alt="" />
            </div>
            <div className='ml-5'>
               <h5 className='font-semibold text-xl'> {user}</h5>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default MediaComments;