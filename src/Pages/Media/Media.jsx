import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {

    const [allposts, setAllPost] = useState([])
   
    useEffect(()=>{
        fetch(`https://socail-media-server-nu.vercel.app/media`)
        .then(res => res.json())
        .then(data => setAllPost(data))
    },[allposts])
    return (
        <div className=' mx-auto bg-white'>
            <div class="grid grid-cols-1 gap-4">
                {
                    allposts.map( post => <MediaCard post={post} />)
                }
            </div>

        </div>
    );
};

export default Media;