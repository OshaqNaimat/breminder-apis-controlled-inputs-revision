import React, { useState } from 'react'

const Usereducer = () => {

    const [name,setName] = useState('')
     const [error,setError] = useState(false)
     const [message,setMessage] = useState('')
     const [success,setSuccess] = useState('')
     const [data,setData] = useState([])

    const handleClick = (e)=>{
        e.preventDefault()
        if(name == ''){
                setError(true)            
                setMessage('please enter a value')
                setSuccess(false)
            }else{
                setError(false)
                setMessage("Value Added Successfully")
                setSuccess(true)
                setData([...data,name])
                setName('')
            }
    }

  return (
    <>
    <div className="container mx-auto w-[90%] md:w-1/2 lg:w-1/3 my-5 shadow-lg p-5 rounded-md shadow-black">
        <form action="">
            <label className='text-gray-500 font-semibold'>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='w-full p-2 border-2 rounded-md' />
            {error && <p className='text-red-500'>
                {message}
                </p>
                }
            {success && <p className='text-green-500'>
                {message}
                </p>}
            <button onClick={handleClick} className='w-full text-center bg-blue-500 hover:bg-blue-600 text-white my-3 rounded-md p-2'>Add</button>
        </form>
    </div>
    
    </>
  )
}

export default Usereducer