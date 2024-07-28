import React from 'react'
import { useFormContext } from 'react-hook-form'

const hotelFacility = [
  'Free Wifi',
  'Pool',
  "Family Rooms",
  "SPA",
  "Outdoor Pool",
  "Gym"
]

const Facilities = () => {
  const {register, watch, formState : {errors}} = useFormContext();
  return (
    <div>
        <h1 className='text-lg font-bold text-gray-700'>Facilities</h1>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 gap-2 md:gap-y-5 gap-y-3'>
          {
            hotelFacility.map((facilities) => (
              <label >
                <input 
                  type="checkbox"
                  value={facilities} 
                  {...register('facilities', { 
                    validate: (facilities) => {
                      if(facilities && facilities.length > 0){
                        return true
                      }else{
                        return "Select atleast one facility"
                      }
                    }
                  })}
                />
                <span className='ml-2'>{facilities}</span>
              </label>
            ))
          }
        </div>
        {
          errors && <p className='text-red-500 text-sm'>{errors.facilities?.message}</p>
        }
    </div>
  )
}

export default Facilities