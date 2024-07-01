import React from 'react'
import '../style/DiningOut.css'
import Collection from './Collection'
import { DiningOutData } from '../Data/DiningOutData'
import Filters from './Filters'
import ExploreSection from './Delivery/ExploreSection/ExploreSection'

const collectionList=[
  {
    id:"1",
    title:"Pocket Friendly",
    cover:"https://b.zmtcdn.com/data/collections/e7a4421e4dc844fbd3846682a2ec93b6_1620303554.jpg",
    places:"12"
  },
  {
    id:"2",
    title:"Sweet Shops",
    cover:"https://b.zmtcdn.com/data/collections/8d00318a5e42cd14edbe73eda011a2d9_1620304242.jpg",
    places:"8",
  },
  {
  id: "3",
  title: "Vegetarians Delight",
  cover:"https://b.zmtcdn.com/data/collections/ac8719325a085e1fbdda24eee794866f_1620304913.jpg",
  places: "12 places"
  }
]

const diningFilters= [
  {
    id:"1",
    icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:"Filters"
  },
  {
    id:"2",
    title:"Pizza"
  },
  {
    id:"3",
    title:"Rating: 4.0+"
  },
  {
    id:"4",
    title:"Pure Veg"
  },
  {
    id:"5",
    title:"Cuisines",
    icon:<i className='fi fi-rr-angle-small-down absolute-center'></i>
  }
]

const diningList= DiningOutData;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
        <Filters filterList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Trending dining out restaurants in Roorkee"/>
    </div>
  )
}

export default DiningOut;
