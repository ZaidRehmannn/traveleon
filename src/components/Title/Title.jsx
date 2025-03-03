import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className='my-10 flex flex-col justify-center items-center space-y-2'>
      <h2 className='text-3xl sm:text-4xl'>{title}</h2>
      <p className='text-base sm:text-lg text-center'>{subTitle}</p>
    </div>
  )
}

export default Title
