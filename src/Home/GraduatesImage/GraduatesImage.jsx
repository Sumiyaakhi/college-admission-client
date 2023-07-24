import React, { useEffect, useState,  useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SectionTitle from '../../Pages/SectionTitle/SectionTitle';


const GraduatesImage = () => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        fetch('https://college-admission-server-phi.vercel.app/graduatesImage')
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            setImages(data);
        }
           

        )
    },[])

    return (
        <div>
            <SectionTitle
            heading="Image gLLERY"
            subHeading="graduates group picture"
            ></SectionTitle>
           <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {
            images.map(image =>
                <SwiperSlide key={image._id} >
                    <img className='w-screen h-screen' src={image.graduatesGroupPicture} alt="" />
                    </SwiperSlide>
                )
        }
      </Swiper> 
        </div>
    );
};

export default GraduatesImage;