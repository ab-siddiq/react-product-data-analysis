import React from 'react';

const About = () => {
    return (
        <div className='h-screen mx-10'>
            <p className='font-bold text-4xl text-center mt-3 text-green-600'>About this project</p>
            <ol className='list-decimal font-bold text-2xl text-green-900 mt-5 lg:ml-96 sm:ml-2'>
                <li>We use react router which prevent the page loading.</li>
                <li>We use custom-hook prevent repeated code of data loading</li>
                <li>We use rechart for showing data in chart.</li>
                <li>We use api and custom api to show data in the UI.</li>
                <li>We use tailwindcss for ui design.</li>
            </ol>
        </div>
    );
};

export default About;