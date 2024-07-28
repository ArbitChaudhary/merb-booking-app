import React from 'react'
import { useFormContext } from 'react-hook-form'

const typeList = [
        "Budget",
         "Luxury",
         "Family",
         "Bunquet",
         "Resort"
]
const Type = () => {
    const {register,watch, formState : {errors}} = useFormContext();
    const typeWatch = watch("type")
  return (
    <div>
        <h1 className="text-lg text-gray-700 font-bold ">Type</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {
                typeList?.map((item) => (
                    <label className={ typeWatch === item ? "px-4 py-1 rounded-2xl bg-blue-500 text-center" : "px-4 py-1 rounded-2xl bg-gray-600 text-center"}>
                    <input 
                        type="radio" 
                        value={item} 
                        {...register("type", {required : "Choose one Hotel type"})}
                        className="hidden " 
                    />
                    <span>{item}</span>
                    </label>
                ))
            }
        </div>
        {
            errors && <p className="text-red-500 text-sm ">{errors.type?.message}</p>
        }
    </div>
  )
}

export default Type