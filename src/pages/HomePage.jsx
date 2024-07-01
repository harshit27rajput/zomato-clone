import React, { useState } from 'react'
import Header from '../components/Header'
import TabOptions from '../components/TabOptions'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery/Delivery'
import DiningOut from '../components/DiningOut'

function HomePage() {
  const [activeTab,setActiveTab]=useState("Delivery")
  const getCorrectScreen=(tab)=>{
    switch(tab){
      case "Delivery":
        return <Delivery/>
      case "Dining Out":
        return <DiningOut/>
      default:
        return <Delivery/>
        
    }
  }
  return (
    <div>
      <Header/>
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )
}
 
export default HomePage
