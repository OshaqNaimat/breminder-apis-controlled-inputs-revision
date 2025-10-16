// import React, { useEffect, useState } from 'react'
// import SIngleitem from './SIngleitem'

// const Api = () => {

//     let  url = 'https://api.github.com/users'

//     const [user,setUser] = useState()
//     const getdata =async ()=>{
//        let response = await fetch(url)
//        let data = await response.json()

//        setUser(data)
//        console.log(data)
//     }

//     useEffect(()=>{
//         getdata()
//     },[])
     
//   return (
//     <>
//     <h1 className='text-center my-4'>User data</h1>

//     <div className="gap-4  container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center">

//           {user?.map((item,index)=>{
//             return <SIngleitem {...item}  key={index}/>
//           })}

//     </div>
//     </>
//   )
// }

// export default Api



import React, { useState } from 'react'
import Singleitem from '../Usereducer/Singleitem'

const Api = () => {

  let url ='https://api.github.com/users'
  const [user,setUser] = useState()
  const getdata = async()=>{
       let response = await fetch(url)
       let data = await response.json()
       setUser(data)
  }

  useEffect(()=>{
    getdata()
  },[])
  return (
    <>
    <h1 className='text-center font-semibold text-3xl '>User Data</h1>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      {user?.map((item,index)=>{
        return <Singleitem/>
      })}
    </div>
    </>
  )
}

export default Api