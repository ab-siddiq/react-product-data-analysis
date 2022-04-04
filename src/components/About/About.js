import React from 'react';

const About = () => {
    return (
        <div>
            <p className='font-bold text-3xl text-center mt-3'>About this project</p>
            <ol className='list-decimal'>
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