import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CardDetails = () => {

    const {user} = useContext(AuthContext);
    const singleCollegeCard= useLoaderData()
    const navigate = useNavigate()
    const {_id, collegeName,admissionDate,collegeImage,collegeRating,events,numberOfResearchers,researchHistory,sports
    } = singleCollegeCard;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;