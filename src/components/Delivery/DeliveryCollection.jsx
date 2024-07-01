import React from 'react'
import "../../style/DeliveryCollection.css"
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './DeliveryItem';

const deliveryItems=[
    {
        id:1,
        title:"Pizza",
        cover:"https://images.unsplash.com/photo-1613564834361-9436948817d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fHww"
    },
    {
        id:2,
        title:"Burger",
        cover:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwa2luZ3xlbnwwfHwwfHx8MA%3D%3Dhttps://b.zmtcdn.com/data/o2_assests/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
    },
    {
        id:3,
        title:"Rolls",
        cover:"https://media.istockphoto.com/id/1941912992/photo/spring-rolls-filled-with-meat-and-vegetables-served-with-soy-sauce-on-wooden-table.jpg?s=612x612&w=0&k=20&c=a6ZqGuZZkLPFj44Ck-yM2kwd6JgCw-I2QMohZvpiMN4=",
    },
    {
        id:4,
        title:"Cake",
        cover:"https://cdn.pixabay.com/photo/2023/09/04/20/39/cake-8233676_1280.jpg",
    },
    {
        id:5,
        title:"Biryani",
        cover:"https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043065_640.jpg",
    },
    {
        id:6,
        title:"Chaat",
        cover:"https://cdn.pixabay.com/photo/2022/04/01/10/20/panipuri-7104501_1280.jpg",
    },
    {
        id:7,
        title:"Momos",
        cover:"https://cdn.pixabay.com/photo/2024/05/21/23/54/ai-generated-8779349_640.jpg",
    },
    {
        id:8,
        title:"Paneer",
        cover:"https://media.istockphoto.com/id/1363305308/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=LCFa5L7mICm6OjOkeRaRbLOLwF_XDMWzX3Ts1qNBRY4=",
    },
    {
        id:9,
        title:"Samosa",
        cover:"https://media.istockphoto.com/id/1287597260/photo/street-food-samosa.jpg?s=612x612&w=0&k=20&c=L6VY536lbhBw1NNyF0lhUhddsGeoYW5hfrEGJQ0i2BU=",
    },
    {
        id:10,
        title:"Parantha",
        cover:"https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
    },
    {
        id:11,
        title:"Pastry",
        cover:"https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
    }
]


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};
function DeliveryCollection() {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item} />
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollection
