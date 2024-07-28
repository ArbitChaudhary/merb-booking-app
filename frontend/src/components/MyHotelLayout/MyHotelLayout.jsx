import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Header from '../Header/Header'

const MyHotelLayout = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Header />
        <div className='flex flex-row gap-7'>
            <Sidebar />
            <div className='flex w-full'>
                {
                    children
                }
            </div>
        </div>
    </div>
  )
}

export default MyHotelLayout