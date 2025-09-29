import React, { useEffect, useState } from 'react'
import SIngleitem from './SIngleitem'

const Api = () => {

    let  url = 'https://api.github.com/users'

    const [user,setUser] = useState()
    const getdata =async ()=>{
       let response = await fetch(url)
       let data = await response.json()

       setUser(data)
       console.log(data)
    }

    useEffect(()=>{
        getdata()
    },[])
     
  return (
    <>
    <h1 className='text-center my-4'>User data</h1>

    <div className="gap-4  container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center">

          {user?.map((item,index)=>{
            return <SIngleitem {...item}  key={index}/>
          })}

    </div>
    </>
  )
}

export default Api