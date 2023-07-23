import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Pages/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const ResearchPapers = () => {
const [papers, setPapers] = useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/researchPapers')
    .then(res=> res.json())
    .then(data =>{
        console.log(data);
        setPapers(data);
    })
},[])

    return (
        <div>
            <SectionTitle
            heading="Research Papers"
            subHeading="Researched by college students"
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-12'>
                {
                    papers.map(paper => <div key={paper._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={paper.researchPaperImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{paper.researchPaperName}</h2>
                      <p>{paper.category}</p>
                      <div className="card-actions justify-end">
                       <Link to={paper.website}> <button className="btn bg-primary text-white">Go to website</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default ResearchPapers;