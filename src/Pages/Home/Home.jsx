import React from 'react';
import Post from './Post';
import Top3Post from './Top3Post';

const Home = () => {
    return (
        <div className=' mx-auto'>
            <Post />
            <Top3Post />
        </div>
    );
};

export default Home;