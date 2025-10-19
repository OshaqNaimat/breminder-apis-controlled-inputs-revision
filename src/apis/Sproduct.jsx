// import React from 'react'

// const Sproduct = ({images,brand,title,price}) => {
//   return (
//     <>
//     <div className="container shadow-lg shadow-black  rounded-md">
//         <img src={images[0]} alt="" />
//         <h2 className='text-center font-semibold'>{title}</h2>
//         <div className="flex justify-around">
//         <p className='text-gray-800'>{brand}</p>
//         <p className='text-gray-800'>{price}</p>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default Sproduct

import React from 'react'

const Sproduct = ({images,brand,title,price}) => {
  return (
    <>
    <div className="container shadow-lg shadow-black rounded-md">
      <img src={images[0  ]} alt="" />
      <h2 className='text-center font-semibold'>
        {title}
      </h2>
      <div className="flex justify-around">
        <p className='text-gray-800'>{brand}</p>
        <p className='text-gray-800'>{price}</p>
      </div>
    </div>
    </>
  )
}

export default Sproduct