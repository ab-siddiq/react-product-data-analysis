import useReviews from '../../hooks/useReviews';
import HeroImage from '../../images/Tesla-Model-Pi.jpg'
import Review from '../Review/Review';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    
    console.log(reviews)
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
                <div className="grid grid-cols-3 gap-10 m-10 rounded">

                    {reviews.slice(0,3).map(review=> <Review key={review.id} review={review}></Review>)}
                </div>
                <button onClick={()=>{}}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;