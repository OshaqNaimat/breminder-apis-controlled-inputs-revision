// import React from 'react'
// import { IoClose } from 'react-icons/io5'

// const Namepop = ({setOpen,name}) => {
//   return (
//     <div className='min-h-screen  bg-black/50 w-full
//     fixed text-5xl top-0 start-0 flex justify-center items-center'>
//       <h1 className='bg-white rounded-md p-10 backdrop-blur-3xl'>{name}</h1>
//       <IoClose onClick={()=>setOpen(false)} size={40} className='absolute top-5 right-5 text-white cursor-pointer'/>
//     </div>
//   )
// }

// export default Namepop
import React from 'react'
import { IoClose } from 'react-icons/io5'

const Namepop = ({name,setOpen}) => {
  return (
    <>
    <div className="min-h-screen bg-black/50 backdrop-blur w-full fixed text-5xl top-0 start-0
    flex justify-center items-center">
    <h1 className='bg-white rounded-md p-10'>{name}</h1>
    <IoClose onClick={()=>setOpen(false)} className='absolute top-5 right-5 text-white cursor-pointer '/>
    </div>
    </>
  )
}

export default Namepop