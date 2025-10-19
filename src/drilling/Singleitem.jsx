import React, { useContext } from 'react'
import { PersonContext } from './Drilling'
const Singleitem = ({id,name,age,image,remove}) => {
  
    // const data = useContext(PersonContext)

    const {mydata,filterData} = useContext(PersonContext)

    return (
    <>
    <div className=" w-[90%] md:w-1/2 lg:w-1/3 mx-auto items-center bg-white p-4 mb-4 rounded shadow">
        <img src={image} alt="" />
        <div className="text-center">
        <h4>{name}</h4>
        <h5>{age}</h5>
        </div>
        <button onClick={()=>data(id)} className='bg-red-500 rounded-md w-full my-2'>Delete</button>
    </div>
    
    </>
  )
}

export default Singleitem