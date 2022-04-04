import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HeroImage from '../../images/Tesla-Model-Pi.jpg'
import Review from '../Review/Review';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    
    const navigate = useNavigate();
    const showAllReviews = () => {
        const path = '/reviews';
        navigate(path);
    }
    return (
        <div className="">        
            <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-center'>
                <div className="col-span-2  text-left ml-20">
                    <p className='font-bold text-black-600 text-4xl text-green-900'>Make Yourself Smarter</p>
                    <p className='font-bold text-blue-700 text-4xl'>Buy This Phone</p>
                    <p className='my-10 text-green-900'>We are going to launch a new mobile phone. We put all the latest technology to our upcoming phone. You can feel the real environment flavor into this phone. Its all depended on natural concept. It's totally a new revolution. We are the first tech company who are availing all these feature first time to the mobile devices.</p>
                    <button className=' bg-green-600 font-bold py-2 px-4 rounded hover:scale-105 text-green-200 hover:text-green-900 duration-200'>Have A Look</button>
                </div>
                <div className="sm:flex sm:justify-center">
                    <img src={HeroImage} alt="" />
                </div>
                
            </div>
            <div className="text-center">
                <p className="text-center font-bold text-xl text-green-900">Customer Reviews ({ reviews.slice(0,3).length})</p>
                <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 m-10 rounded">

                    {reviews.slice(0,3).map(review=> <Review key={review.id} review={review}></Review>)}
                </div>
                <button className='text-center bg-green-600 font-bold py-2 px-4 rounded hover:scale-105 text-green-200 hover:text-green-900 duration-200' onClick={showAllReviews}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;