import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-6 font-serif uppercase text-primary'>
           <h1 className='text-5xl mb-3'>{heading}</h1>
           <p className='text-xl font-bold mb-3 border-y-4 py-4'>{subHeading}</p> 
        </div>
    );
};

export default SectionTitle;