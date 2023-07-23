import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Pages/SectionTitle/SectionTitle';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            setReviews(data)
        })
    },[])
    return (
        <>
        <SectionTitle
        heading="Reviews section"
        subHeading="Review and feedback for a specific institute"
        ></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto mb-2'>
            {
                reviews.map(review =>
                    <div key={review._id} className="card w-96 bg-primary text-neutral-content">
  <div className="card-body">
    <h2 className="card-title font-serif text-xl">Institute: {review.collegeName}</h2>
    <p> <span className='text-xl font-bold  underline'>Review</span> <br /> {review.review}</p>
    <p> <span className='text-xl font-bold  underline'>Feedback</span> <br /> {review.feedback}</p>
   
  </div>
</div>
                    )
            }
        </div>
        </>
    );
};

export default Reviews;