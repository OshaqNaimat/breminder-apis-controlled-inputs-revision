// import React, { useReducer } from 'react'

// const Conuter = () => {

//     const reducer = (state,action)=>{
//              if(action.type == 'INC'){
//                 return state + 1
//              }else if(action.type == 'DEC'){
//                   return state -1
//              }
//     }

//        const initialState = 0

//     const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <>
//     <div className="container mx-auto w-[90%] md:w-1/2 lg:w-1/3">
//         <h1 className='text-center text-7xl'>{state}</h1>
//        <div className="flex justify-center">
//          <button onClick={()=>dispatch({type : 'INC'})}  className='bg-green-500 text-white text-center p-2 rounded-md
//         hover:bg-green-600 active:scale-90 duration-200'>Increase</button>
//         <button onClick={()=>dispatch({type : 'DEC'})} className='bg-red-500 text-white text-center p-2 rounded-md
//         hover:bg-red-600 active:scale-90 duration-200'>Decrease</button>
//        </div>
//     </div>
    
//     </>
//   )
// }

// export default Conuter

import React, { useReducer, useState } from 'react'
import Singleitem from './Singleitem'

const Conuter = () => {

  const [name,setName] = useState('')

  const reducer =(state,action)=>{
    if(action.type == 'Empty' ){
      return {
        ...state,
        error : true,
        success : false,
        message : 'Please enter a value'
      }
    }else if(action.type == 'Reset'){
      return {
        ...state,
        error : false,
        message : '',
        success : false
        
      }
    }else if(action.type == 'Fill'){
      return {
        ...state,
        success : true,
        message : 'Value added successfully',
        data : [...state.data,action.payload]
      }
    }

  } 

  const initialState = {
    
    error : false,
    success : false,
    message : '',
    data : []
  }

  const [state,dispatch] = useReducer(reducer,initialState)
  const handleClick = (e) =>{
    e.preventDefault()
     if(!name){
      dispatch({type : 'Empty'})
     }else {
      dispatch({type : 'Fill', payload : name})
     }

     setName('')
     setTimeout(() => {
      dispatch({type : 'Reset'})
     }, 3000);
  }

  
  return (
    <>
    
    <div className="container mx-auto shadow-lg shadow-black p-5 w-[90%] md:w-1/2 lg:w-1/3
    rounded-md my-3 select-none">
      <form action="" >
        <label htmlFor="" className='font-semibold'>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='w-full border p-1 rounded-md outline-none' />
        {state.error && <p className='text-red-500 font-semibold'>
          {state.message}
        </p>}
        {state.success && <p className='text-green-500 font-semibold'>
          {state.message} 
          </p>}
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-600 active:scale-90 duration-100
        w-full my-3 p-1 text-white rounded-md'>ADD</button>
      </form>
    </div>
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 select-none text-center">

    {state.data.map((item,index)=>{
      return <Singleitem name ={item}/>
    })}
    </div>
    </>
  )
}

export default Conuter