import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import Leftbar from '../Pages/Leftbar/Leftbar';
import Rightbar from '../Pages/RightBar/Rightbar';

const Main = () => {
    return (
        <div>
            <Header />
                <div className=' md:px-20 grid grid-cols-4 gap-4'>
                    <div>
                        <Rightbar />
                    </div>
                    <div className='col-span-2'><Outlet /></div>
                    <div>
                        <Leftbar />
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default Main;