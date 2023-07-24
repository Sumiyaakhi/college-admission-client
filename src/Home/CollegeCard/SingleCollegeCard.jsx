import React from 'react';
import { Link } from 'react-router-dom';

const SingleCollegeCard = ({singleCollegeInfo}) => {

    const {_id,collegeName,collegeInfo,admissionDate,events,researchHistory,sports,collegeRating,numberOfResearchers,collegeImage} = singleCollegeInfo;
    return (
        <div className="card w-96 h- bg-primary shadow-xl">
  <figure><img className='w-96 h-72' src={collegeImage} alt="Shoes" /></figure>
  <div className="card-body text-white h-[552px]">
    <h2 className="card-title font-serif text-2xl uppercase">{collegeName}</h2>
    <p><span className='font-bold underline '>Admission Dates:</span> {admissionDate}</p>
    <p> <span className='font-bold underline '>Events:</span> {events.map((item, index)=>  <li 
    key={index}
    >{item}</li> )}</p>
    <p> <span className='font-bold underline '>Research History:</span> {researchHistory.map((history,index)=> <li key={index}>{history.title}, {history.author}, {history.publicationDate}</li> )}</p>

        <p> <span className='font-bold underline '>Sports:</span> {sports.map((sport,index)=> <li key={index}>{sport}</li> )}</p>

    <div className="card-actions justify-end">
      <Link to={`/cardDetails/${_id}`}><button className="btn text-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default SingleCollegeCard;