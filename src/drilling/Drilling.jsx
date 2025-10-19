import React, { createContext, useState } from 'react'
import { info } from '../birthdayreminder/Data'
import List from './List'


const PersonContext = createContext()
const Drilling = () => {
   const [mydata,setMyData] = useState( info )

   const filterData =(id)=>{
    let newData = mydata.filter((item,index)=>{
        return item.id !== id
    })


    setMyData(newData)
   }
    return (
    <PersonContext.Provider value="salam">
    <div className="container mx-auto">
        {mydata.map((item,index)=>{
            return <List remove={filterData} item={item} key={index}/>
        })}
    </div>
    </PersonContext.Provider>
  )
}

export default Drilling