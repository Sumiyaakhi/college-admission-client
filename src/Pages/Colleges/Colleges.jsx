import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SingleCollegeCard from '../../Home/CollegeCard/SingleCollegeCard';
import SingleCollege from './SingleCollege';

const Colleges = () => {
    const [loading, setLoading] = useState(true);
    const [collegeInfo, setCollegeInfo] = useState([]);

    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
    }

    useEffect(()=>{
        fetch('https://college-admission-server-phi.vercel.app/collegeInfo')
        .then(res=>res.json())
        .then(data => {
            setLoading(true);
            console.log(data);
            setCollegeInfo(data);
        })
    },[])
    return (
        <>
        {/* college card section */}

        <SectionTitle 
        heading="College information"
        subHeading="details"
        ></SectionTitle>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 w-10/12 mx-auto my-8'>
    {
        collegeInfo.map(singleCollegeInfo => 
<SingleCollege
    key={singleCollegeInfo._id}
    singleCollegeInfo={singleCollegeInfo}
></SingleCollege>
            )
    }
</div>
        </>
    );
};

export default Colleges;