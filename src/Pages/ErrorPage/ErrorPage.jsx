import img from '../../assets/404-error-page.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <img  className="w-screen" src={img} alt="" />
          <div className='flex items-center justify-center'>
          <Link to='/'> <button className='bg-primary p-3 text-white rounded-xl'>Back to Home Page</button></Link>
          </div>
        </div>
    );
};

export default ErrorPage;