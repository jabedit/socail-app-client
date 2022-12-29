import React from 'react';
import Post from './Post';
import Top3Post from './Top3Post';

const Home = () => {
    return (
        <div className='md:w-1/2 mx-auto'>
            <Post />
            <Top3Post />
        </div>
    );
};

export default Home;