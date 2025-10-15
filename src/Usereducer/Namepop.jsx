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
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'

const Namepop = ({ name, setOpen }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    
    setTimeout(() => setVisible(true), 100)
  }, [])

  const closePopup = () => {
    setVisible(false)
    setTimeout(() => setOpen(false), 300) // wait for animation to finish
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur flex justify-center items-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-md p-10 text-5xl transform transition-all duration-300 ${
          visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {name}
      </div>
      <IoClose
        onClick={closePopup}
        className="absolute top-5 right-5 text-white cursor-pointer text-4xl"
      />
    </div>
  )
}

export default Namepop
