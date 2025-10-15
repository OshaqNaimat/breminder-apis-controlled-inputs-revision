// import React, { useState } from 'react'
// import { FaTrash } from 'react-icons/fa'
// import Namepop from './Namepop'

// const Singleitem = ({ name, onDelete }) => {
//   const [open, setOpen] = useState(false)

//   const handleOpen = () => {
//     setOpen(true)
//   }

//   return (
//     <>
//       <div className="container items-center text-center shadow-lg rounded-md shadow-black p-3 flex justify-between">
//         {open && <Namepop setOpen={setOpen} name={name} />}

//         <h1 onClick={handleOpen} className='text-2xl font-semibold cursor-pointer'>
//           {name.length > 10 ? `${name.slice(0, 10)}...` : name}
//         </h1>

//         <FaTrash
//           size={30}
//           className='cursor-pointer bg-red-500 text-white p-1 rounded-md hover:bg-red-600 active:scale-90 duration-150'
//           onClick={onDelete} 
//         />
//       </div>
//     </>
//   )
// }

// export default Singleitem


import React from 'react'

const Singleitem = ({name}) => {
  return (
    <>
    <div className="container items-center text-center shadow shadow-black">
      {name}
    </div>
    
    </>
  )
}

export default Singleitem