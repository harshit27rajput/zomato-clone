import React from 'react'
import '../../style/Delivery.css'
import Filters from '../Filters'
import DeliveryCollection from './DeliveryCollection'
import TopBrands from '../TopBrands'
import ExploreSection from './ExploreSection/ExploreSection'
import { restaurants } from '../../Data/Restaurants'


const deliveryFilters=[{
  id:1,
  icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
  title:"Filters",
},
{
  id:2,
  title:"Rating: 4.0+",
},
{
  id:3,
  title:"Safe and Hygienic",
},
{
  id:4,
  title:"Pure Veg",
},
{
  id:5,
  title:"Delivery Time",  
  icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
},
];

const restaurantList= restaurants;

function Delivery() {
  return (
    <div>
      <div className="max-width">  
      <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollection/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName='Delivery Restaurant in Haridwar' />
    </div>
  )
}

export default Delivery