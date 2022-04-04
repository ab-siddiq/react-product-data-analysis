import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-green-600 font-bold py-2 px-3 text-green-200 sticky top-0'>
            <nav className='lg:flex sm:flex md:flex grid justify-between  lg:mx-96 md:mx-64 sm:mx-20 py-3 font-bold text-xl '>
                <CustomLink  to="/home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;