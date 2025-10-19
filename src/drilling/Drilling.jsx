import React, { useState } from 'react'
import { info } from '../birthdayreminder/Data'
import List from './List'

const Drilling = () => {
   const [mydata,setMyData] = useState( info )

   const filterData =()=>{
    let newData = mydata.filter((item,index)=>{
        return item.id !== id
    })


    setMyData(newData)
   }
    return (
    <>
    <div className="container mx-auto">
        {mydata.map((item,index)=>{
            return <List remove={filterData} item={item} key={index}/>
        })}
    </div>
    </>
  )
}

export default Drilling