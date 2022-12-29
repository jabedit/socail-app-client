import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {

    const [allposts, setAllPost] = useState([])
   
    useEffect(()=>{
        fetch(`http://localhost:5000/media`)
        .then(res => res.json())
        .then(data => setAllPost(data))
    },[allposts])
    return (
        <div className=' md:w-1/2 mx-auto'>
            <div class="grid grid-cols-1 gap-4">
                {
                    allposts.map( post => <MediaCard post={post} />)
                }
            </div>

        </div>
    );
};

export default Media;