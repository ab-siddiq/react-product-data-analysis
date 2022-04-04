import React from 'react';
import HeroImage from '../../images/Tesla-Model-Pi.jpg'
const Home = () => {
    return (
        <div className="">        
            <div className=' grid grid-cols-3 gap-10 items-center'>
                <div className="col-span-2  text-left ml-20">
                    <p className='font-bold text-black-600 text-4xl'>Make Yourself Smarter</p>
                    <p className='font-bold text-blue-700 text-4xl'>Buy This Phone</p>
                    <p className='my-10'>We are going to launch a new mobile phone. We put all the latest technology to our upcoming phone. You can feel the real environment flavor into this phone. Its all depended on natural concept. It's totally a new revolution. We are the first tech company who are availing all these feature first time to the mobile devices.</p>
                    <button className='px-10 py-3 bg-lime-900 rounded '>Have A Look</button>
                </div>
                <div className="">
                    <img src={HeroImage} alt="" />
                </div>
                
            </div>
            <div className="">
                <p className="">Custom Reviews</p>
                
                <button>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;