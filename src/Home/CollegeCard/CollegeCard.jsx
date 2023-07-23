import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SingleCollegeCard from './SingleCollegeCard';
import SectionTitle from '../../Pages/SectionTitle/SectionTitle';

const CollegeCard = () => {
    const [loading, setLoading] = useState(true);
    const [collegeInfo, setCollegeInfo] = useState([]);

    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
    }

    useEffect(()=>{
        fetch('http://localhost:5000/collegeInfo')
        .then(res=>res.json())
        .then(data => {
            setLoading(true);
            console.log(data);
            setCollegeInfo(data);
        })
    },[])
    return (
        <>
        {/* search field */}
        <div className='flex gap-3 m-5'>
            <div className='flex justify-center items-center text-white rounded-3xl px-3 gap-2 bg-primary'> <p className=''>Search</p>
            <FaSearch></FaSearch>
            </div>
           <input className='w-full bg-primary p-3  rounded-3xl text-white' placeholder='Type here for search any college information' type="text" /> 
        </div>

        {/* college card section */}

        <SectionTitle 
        heading="About College information"
        subHeading="some details"
        ></SectionTitle>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 w-10/12 mx-auto my-8'>
    {
        collegeInfo.slice(0,3).map(singleCollegeInfo => 
<SingleCollegeCard
    key={singleCollegeInfo._id}
    singleCollegeInfo={singleCollegeInfo}
></SingleCollegeCard>
            )
    }
</div>
        </>
    );
};

export default CollegeCard;