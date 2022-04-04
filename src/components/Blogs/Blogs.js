import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20 my-10'>
            <p className='font-bold text-2xl'>1. What is context api?</p>
            <p>Answer: Context api provides a way which helps to pass data without sending through props in the component. For example, we have a parent component which have child and child has another component, we need to pass data parent to child using props. This is called props drilling. If any component doesn't use props it still have to to pass to props for the child component. To avoid this chaining context api can help us to pass data easily. So context api can directly access the data using connect method of react-redux library. </p>
            <p className='font-bold text-2xl mt-4'>2. What is semantic tag?</p>
            <p>Answer: Semantic tag itself has the clear brief of it job to the browser as well as to the developer. For examle, div is not a semantic tag which brief nothing to the browser or developer. On the other hand semantic tag from, table etch which have its own meaning. It describe itself what it is. </p>
            <p className='font-bold text-2xl mt-4'>3. Difference between inline, block and inline-block element?</p>
            <p>Answer: Inline element behave like as it takes only the area it has content. It doesn't start with new line only takes the width the content it have. Inline-block also takes the width the content it have. But it gives the facility to have height and width. BLock level element takes the entire width even if the doesn't have much content same as the width. It begins with new line. It also gives the facility to have height width. </p>
        </div>
    );
};

export default Blogs;