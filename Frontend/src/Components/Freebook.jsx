import React from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../Cards';
const Freebook = ({item}) => {
    const filterData = list.filter((date) => data.category=== "Free" );

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3, 
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 ">
            <div>
            <h1 className='font-semibold text-xl pb-2'>
                Free Books Library
            </h1>
            <p>
            How to Build a Full Stack Web Application Using MongoDB, Express Js, React Js & Node Js How to Build a Full Stack Web Application Using MongoDB, Express Js, React Js & Node Js 
            </p>
            </div>
        </div>
        <Slider {...settings}>
            {filterData.map((item) => (
                <Cards item={item} key={item.id} />
            ))}
        </Slider>
        <div>
        </div> 
    </>
  ) 
}

export default Freebook