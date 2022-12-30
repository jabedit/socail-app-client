import React, { useEffect, useState } from 'react';
import MediaCard from '../Media/MediaCard';

const Top3Post = () => {
    const [allposts, setAllPost] = useState([])
   
    useEffect(()=>{
        fetch(`https://socail-media-server-nu.vercel.app/topmedia`)
        .then(res => res.json())
        .then(data => setAllPost(data))
    },[allposts])
    return (
        <div className=' mx-auto'>
            <div class="grid grid-cols-1 gap-4">
                {
                    allposts.map( post => <MediaCard post={post} />)
                }
            </div>

        </div>
    );
};

export default Top3Post;