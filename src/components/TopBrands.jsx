import React from 'react';
import Slider from "react-slick";
import "../style/TopBrands.css";
import NextArrow from '../components/carousel/nextArrow';
import PrevArrow from '../components/carousel/prevArrow';

const topBrandsList=[
    {
        id:1,
        time: "38 min",
        cover: "https://cdn.pixabay.com/photo/2014/04/27/14/18/fast-food-333140_640.jpg"
    },
    {
        id:2,
        time:"52 min",
        cover: "https://images.unsplash.com/photo-1544067963-8a045010edcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9taW5vJ3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        id:3,
        time:"41 min",
        cover: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcmJ1Y2tzfGVufDB8fDB8fHww"
    },
    {
        id:4,
        time:"47 min",
        cover: "https://images.unsplash.com/photo-1602400236316-f5e3b6d2314c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGRzfGVufDB8fDB8fHww"
    },
    {
        id:5,
        time:"37 min",
        cover: "https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmVzdGxlfGVufDB8fDB8fHww"
    },
    {
        id:6,
        time:"29 min",
        cover: "https://images.pexels.com/photos/9195090/pexels-photo-9195090.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id:7,
        time:"49 min",
        cover: "https://images.unsplash.com/photo-1638405988003-0c2621c4d7ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphJTIwaHV0fGVufDB8fDB8fHww"
    },
]
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand)=>{
            return <div>
                <div className='top-brands-cover'>
                    <img src={brand.cover} alt={brand.time} className='top-brands-image'/>
                </div>
            </div>
        })}  
      </Slider>
    </div>
  )
}

export default TopBrands
