import React from 'react'
import { useFormContext } from 'react-hook-form'

const Guests = () => {
    const { register, watch, formState:{errors} } = useFormContext(); 
  return (
    <div>
        <h1 className='text-lg font-bold text-gray-700'>Guests</h1>
        <div className='mt-4 bg-gray-300 flex flex-col md:flex-row gap-2 md:gap-4 p-5'>
            <label className='text-[15px] text-gray-600 font-bold flex-1'>
                Adults
                <input 
                    type="number"
                    min={1}
                    defaultValue={1}
                    {...register("adultCount")}
                    className='border rounded-sm px-2 md:px-4 py-1 md:py-2 focus:outline-blue-200 w-full'
                />
            </label>
            <label className='text-[15px] text-gray-600 font-bold flex-1'>
                Child
                <input 
                    type="number"
                    min={0}
                    {...register("childCount")}
                    className='border rounded-sm px-2 md:px-4 py-1 md:py-2 focus:outline-blue-200 w-full'
                />
            </label>
        </div>
    </div>
  )
}

export default Guests