import React, { useReducer } from 'react'

const Conuter = () => {

    const reducer = (state,action)=>{
             if(action.type == 'INC'){
                return state + 1
             }else if(action.type == 'DEC'){
                  return state -1
             }
    }

       const initialState = 0

    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <div className="container mx-auto w-[90%] md:w-1/2 lg:w-1/3">
        <h1 className='text-center text-7xl'>{state}</h1>
       <div className="flex justify-center">
         <button onClick={()=>dispatch({type : 'INC'})}  className='bg-green-500 text-white text-center p-2 rounded-md
        hover:bg-green-600 active:scale-90 duration-200'>Increase</button>
        <button onClick={()=>dispatch({type : 'DEC'})} className='bg-red-500 text-white text-center p-2 rounded-md
        hover:bg-red-600 active:scale-90 duration-200'>Decrease</button>
       </div>
    </div>
    
    </>
  )
}

export default Conuter