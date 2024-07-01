import React from 'react'
import '../style/Filters.css'
import FilterItem from './FilterItem';

function Filters({filterList}) {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter)=>{
        return <FilterItem filter={filter} key={filter.id}/>;
      })}
    </div>
  )
}

export default Filters