import React from 'react';
import CustomLink from '../components/CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-green-900 '>
            <nav className='flex justify-between  mx-96 py-3'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;