import React from 'react'

const SIngleitem = ({avatar_url,id,login}) => {
  return (
    <>
    <div className="container shadow rounded-md">
        <img className='w-[250px] h-[250px] rounded-md' src={avatar_url} alt="" />
        <h4 className='font-semibold text-center text-2xl p-5'>{id}.{login}</h4>
        
    </div>
    </>
  )
}

export default SIngleitem