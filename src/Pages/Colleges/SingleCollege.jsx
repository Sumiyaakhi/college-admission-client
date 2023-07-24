import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleCollege = ({singleCollegeInfo}) => {
    const {_id,collegeName,collegeInfo,admissionDate,events,researchHistory,sports,collegeRating,numberOfResearchers,collegeImage} = singleCollegeInfo;
    return (
        <div className="card w-96  bg-primary shadow-xl">
  <figure><img className='w-96 h-72' src={collegeImage} alt="Shoes" /></figure>
  <div className="card-body text-white">
    <h2 className="card-title font-serif text-2xl uppercase">{collegeName}</h2>
    <p><span className='font-bold underline '>Admission Dates:</span> {admissionDate}</p>
    <p> <span  className='font-bold underline'>Research Number:</span>   {numberOfResearchers}</p>

   <Rating  
   placeholderRating={collegeRating}
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar></FaStar>}
  fullSymbol={<FaStar></FaStar>}
  readonly
   ></Rating>

    <div className="card-actions justify-end">
    <Link to={`/cardDetails/${_id}`}><button className="btn text-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleCollege;