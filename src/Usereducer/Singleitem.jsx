import React, { useState } from 'react'
import { FaTractor, FaTrash } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import Namepop from './Namepop'

const Singleitem = ({name}) => {
    const [open,setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)

    }
  return (
    <>
    <div className="container items-center text-center  shadow-lg rounded-md shadow-black p-3 flex justify-between">
        {open && <Namepop setOpen = {setOpen} name = {name}/> }
        <h1 onClick={handleOpen} className='text-2xl font-semibold'>
        { name.length > 10 ? `${name.slice(0,10)}`  : name}...
        </h1>
        <FaTrash size={30} className='cursor-pointer bg-red-500 text-white p-1 rounded-md
        hover:bg-red-600 active:scale-90 duration-150'/>
    </div>
    </>
  )
}

export default Singleitem