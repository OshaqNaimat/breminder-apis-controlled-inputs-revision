import React from 'react'
import Singleitem from './Singleitem'

const List = ({item,remove}) => {
  return (
    <>
    <Singleitem  {...item} remove={remove}/>
    
    </>
  )
}

export default List