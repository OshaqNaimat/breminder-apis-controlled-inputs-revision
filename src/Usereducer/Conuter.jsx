// import React, { useReducer, useState } from 'react'
// import Singleitem from './Singleitem'

// const Conuter = () => {
//   const [name, setName] = useState('')

//   const reducer = (state, action) => {
//     if (action.type === 'Empty') {
//       return {
//         ...state,
//         error: true,
//         success: false,
//         message: 'Please enter a value',
//       }
//     } else if (action.type === 'Reset') {
//       return {
//         ...state,
//         error: false,
//         message: '',
//         success: false,
//       }
//     } else if (action.type === 'Fill') {
//       return {
//         ...state,
//         success: true,
//         message: 'Value added successfully',
//         data: [...state.data, action.payload],
//       }
//     } else if (action.type === 'Delete') {
//       return {
//         ...state,
//         data: state.data.filter((_, index) => index !== action.payload),
//       }
//     }
//   }

//   const initialState = {
//     error: false,
//     success: false,
//     message: '',
//     data: [],
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

//   const handleClick = (e) => {
//     e.preventDefault()
//     if (!name) {
//       dispatch({ type: 'Empty' })
//     } else {
//       dispatch({ type: 'Fill', payload: name })
//     }

//     setName('')
//     setTimeout(() => {
//       dispatch({ type: 'Reset' })
//     }, 3000)
//   }

//   const handleDelete = (index) => {
//     dispatch({ type: 'Delete', payload: index })
//   }

//   return (
//     <>
//       <div className="container mx-auto shadow-lg shadow-black p-5 w-[90%] md:w-1/2 lg:w-1/3 rounded-md my-3 select-none">
//         <form>
//           <label className='font-semibold'>Name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             className='w-full border p-1 rounded-md outline-none'
//           />
//           {state.error && (
//             <p className='text-red-500 font-semibold'>{state.message}</p>
//           )}
//           {state.success && (
//             <p className='text-green-500 font-semibold'>{state.message}</p>
//           )}
//           <button
//             onClick={handleClick}
//             className='bg-blue-500 hover:bg-blue-600 active:scale-90 duration-100 w-full my-3 p-1 text-white rounded-md'
//           >
//             ADD
//           </button>
//         </form>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 select-none text-center">
//         {state.data.map((item, index) => (
//           <Singleitem
//             key={index}
//             name={item}
//             onDelete={() => handleDelete(index)} //
//           />
//         ))}
//       </div>
//     </>
//   )
// }

// export default Conuter

import React, { useReducer, useState } from 'react'
import Singleitem from './Singleitem'

const Conuter = () => {

  const [name,setName] = useState('')

    const reducer = (state,action) =>{
   if(action.type == 'Empty'){
    return {
      ...state,
      error:true,
      success:false,
      message:'Please enter a value'
    }
   }else if (action.type == 'Fill'){
    return {
      ...state,
      error:false,
      success:true,
      message:'Value added successfully',
      data:[...state.data,action.payload]
    }
   }else if (action.type == 'Reset'){
    return {
      ...state,
      error:false,
      success:false,
      message:''
    }
   }else if(action.type == 'Delete'){
     return {

            ...state,
            data:state.data.filter((_,index)=>index !== action.payload)
   }
    }
    }
  const initialState = {
   error:false,
   success:false,
   message:'',
   data:[]
  }
  const [state,dispatch] = useReducer(reducer,initialState)

  const handleData = (e) =>{
       e.preventDefault()
      if(!name){
        dispatch({type:'Empty'})
      }else if(name){
        dispatch({type:'Fill',payload:name})
      }

      setTimeout(() => {
        dispatch({type:'Reset'})
      }, 3000);

      setName('') 
  }

  const handleDelete = (index) =>{
    dispatch({type:'Delete',payload:index})
  }
  return (
    <>
    <div className="container w-[90%] md:w-1/2 lg:w-1/3 shadow-lg shadow-black select-none p-3 mx-auto rounded-md">
        <form action="">
        <label className='font-semibold'>Name</label>
         <input
         value={name}
         onChange={(e)=>setName(e.target.value)}
         type="text"
         className='w-full mt-2  p-1 shadow shadow-black rounded-md outline-0'/>

         {state.error && <p className='text-red-500 font-semibold'>{state.message}</p>}
         {state.success && <p className='text-green-500 font-semibold'>{state.message}</p>}
        <button onClick={handleData} className='bg-blue-500 my-2 hover:bg-blue-600 active:scale-90 duration-200 w-full text-white rounded-md cursor-cell'>ADD</button>
        </form>
    </div>

    <div className="container grid grid-cols-1 p-2 select-none md:grid-cols-2 lg:grid-cols-3 my-3 gap-3">
            {state.data.map((item,index)=>{
                 return  <Singleitem name={item} key={index} onDelete={()=>handleDelete(index)}/>
            })}
          </div> 
    </>
  )
}

export default Conuter
