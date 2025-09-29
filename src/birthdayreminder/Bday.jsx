import React, { useState } from 'react'
import Singlebday from './Singlebday'
import { info} from './Data'

const bday = () => {

  const [data,setData] = useState(info)

  const removedata = (id) =>{
    let newpeople = data.filter((item,index)=>{
      return item.id !== id
    })
    setData(newpeople)
  }
  return (
    <>
    <div className="container mt-5 select-none shadow rounded-md p-5 shadow-black mx-auto w-[90%] md:w-1/2 lg:w-1/3">
         <form onSubmit={(e)=>e.preventDefault()} >
            <h1 className='text-center font-semibold text-3xl my-3'>
              {data.length} birthdays today</h1>
              {data.map((item,index)=>{
                return <Singlebday remove ={removedata} {...item} key={index}/>
              })}
              

              <button className={`${data.length == 0 ? 'bg-green-500 hover:bg-green-500' : 'bg-red-500 hover:bg-red-600'} cursor-pointer active:scale-90  w-full
              p-2 rounded-md text-white duration-200 select-none`} type='button'
              onClick={data.length == 0 ? ()=>setData(info) : ()=>setData([])}>
                 {data.length == 0 ? 'Refresh All' : 'Remove All'}

              </button>
         </form>
    </div>
    
    </>
  )
}

export default bday