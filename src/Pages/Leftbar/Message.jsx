import React from 'react';
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div className=' shadow-2xl rounded-2xl p-5 bg-white'>
            <h2 className=' text-gray-500 font-bold text-2xl'>Message</h2>
            <div><input type="text" /></div>
            
            <div className="tabs text-purple-500">
                <Link className="tab tab-bordered tab-active  border-b-indigo-600 ">Primary</Link> 
                <Link className="tab tab-bordered ">General</Link> 
                <Link className="tab tab-bordered">Requested(5)</Link>
            </div>
            <div className='flex justify-start text-purple-500  items-center py-3' >
                <div className='mr-5'>
                    <img className='w-10 h-10 rounded-full' src='https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Rakibul-Islam.jpg' alt="" />
                </div>
                <div>
                    <h4 className='font-semibold text-xl'>Rakibu Isan</h4>
                    <p>5 New Message</p>
                </div>
            </div>
            <div className='flex justify-start text-purple-500  items-center py-3' >
                <div className='mr-5'>
                    <img className='w-10 h-10 rounded-full' src='https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Rakibul-Islam.jpg' alt="" />
                </div>
                <div>
                    <h4 className='font-semibold text-xl'>Rakibu Isan</h4>
                    <p>5 New Message</p>
                </div>
            </div>
            <div className='flex justify-start text-purple-500  items-center py-3' >
                <div className='mr-5'>
                    <img className='w-10 h-10 rounded-full' src='https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Rakibul-Islam.jpg' alt="" />
                </div>
                <div>
                    <h4 className='font-semibold text-xl'>Rakibu Isan</h4>
                    <p>5 New Message</p>
                </div>
            </div>
            <div className='flex justify-start text-purple-500  items-center py-3' >
                <div className='mr-5'>
                    <img className='w-10 h-10 rounded-full' src='https://www.doctorbangladesh.com/wp-content/uploads/Dr.-Md.-Rakibul-Islam.jpg' alt="" />
                </div>
                <div>
                    <h4 className='font-semibold text-xl'>Rakibu Isan</h4>
                    <p>5 New Message</p>
                </div>
            </div>
        </div>
        
    );
};

export default Message;