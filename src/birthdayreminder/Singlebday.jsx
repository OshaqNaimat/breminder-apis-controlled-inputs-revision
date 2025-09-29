import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Singlebday = ({id,name,age,image,remove}) => {
  return (
    <>
    <div className="flex my-3 justify-between items-center">
        <div className="flex gap-3">
            <img className=' object-fit-cover w-[50px] h-[50px] rounded-full' src={image} alt="" />
              <div className="">
                <h3 className='font-semibold '>{name}</h3>
                <p className='text-gray-500 text-sm'>{age} years old</p>
              </div>
        </div>
        <button  onClick={()=>remove(id)} className='select-none bg-red-500 p-2 rounded-md text-white active:scale-90 hover:bg-red-600 duration-300 cursor-pointer'>

        <FaTrash size={20}/>
        </button>
    </div>
    </>
  )
}

export default Singlebday