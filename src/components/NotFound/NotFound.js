import React from 'react';
import notFound from "../undraw_page_not_found_re_e9o6.svg";
const NotFound = () => {
    return (
        <div className='flex items-center justify-center my-10'>
            <img className='h-auto w-1/2 object-center' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;