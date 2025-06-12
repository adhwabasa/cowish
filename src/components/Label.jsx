import React from 'react'

const Label = ({title, text}) => {
  return (
    <div className='flex justify-between py-2 border-b'>
      <span className='font-semibold'>{title} :</span>
      <span>{text}</span>
    </div>
  )
}

export default Label
