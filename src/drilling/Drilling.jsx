import React, { useState } from 'react'
import { info } from '../birthdayreminder/Data'
import List from './List'

const Drilling = () => {
   const [mydata,setMyData] = useState( info )
    return (
    <>
    <div className="container mx-auto">
        {mydata.map((item,index)=>{
            return <List key={index}/>
        })}
    </div>
    </>
  )
}

export default Drilling