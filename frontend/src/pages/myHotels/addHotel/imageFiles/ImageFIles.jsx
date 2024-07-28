import React from 'react'
import { useFormContext } from 'react-hook-form'

const ImageFIles = () => {
    const { register, watch, formState: {errors}, setValue } = useFormContext()

    const existingImageUrls = watch('imageUrls')

    const handleDelete = async(event, imageUrl) => {
      event.preventDefault();
      setValue("imageUrls", existingImageUrls.filter((url) => url !== imageUrl))
    }
  return (
    <div>
        <h1 className='text-lg text-gray-700 font-bold'>Images</h1>

        <div className='flex flex-row gap-4 mt-5 '>
          {
            existingImageUrls?.map((url) => (
              <div className='relative group'>
                <img src={url} className='h-40 w-28 object-cover' />
                <button 
                  onClick={(event) => handleDelete(event, url)}
                  className='absolute inset-0 opacity-0 bg-opacity-50 group-hover:opacity-100 text-white bg-black flex items-center justify-center'>
                  Delete
                </button>
              </div>
            ))
          }
        </div>
        <div className='mt-5'>
            <input 
                type="file"
                accept='image/*'
                multiple
                {...register("imageFiles",{
                  validate: (imageFiles) => {
                    const totalLength =
                      imageFiles.length + (existingImageUrls?.length || 0);
      
                    if (totalLength === 0) {
                      return "At least one image should be added";
                    }
      
                    if (totalLength > 6) {
                      return "Total number of images cannot be more than 6";
                    }
      
                    return true;
                  },
                })}
                className='max-w-[50%]'
            />
        </div>
    </div>
  )
}

export default ImageFIles