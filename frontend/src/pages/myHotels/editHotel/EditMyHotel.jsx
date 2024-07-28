import {useQuery} from "@tanstack/react-query"
import { useParams } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Details from '../addHotel/Details/Details'
import Facilities from '../addHotel/facilities/Facilities'
import Type from '../addHotel/type/Type'
import Guests from '../addHotel/guests/Guests'
import ImageFIles from '../addHotel/imageFiles/ImageFIles'
import { useMutation } from "@tanstack/react-query"
import hotelAPi from '../../../api/data-set/hotelAPi'

const AddHotel = () => {
    const formMethods = useForm();
    const {handleSubmit, reset} = formMethods;
    // const [formData, setFormData] = useState({
    //     name : '',
    //     country : '',
    //     city : '',
    //     description : '',
    //     pricePerNight : 0,
    //     adultCount : 0,
    //     childCount : 0,
    //     type : '',
    //     facilities : [''],
    //     imageFiles : ['']
    // })

    const { id } = useParams()
  console.log(id)
  const {data: myHotel} = useQuery({
    queryFn : () =>  hotelAPi.getMyHotel(id),
    queryKey : ['getHotelapi'],
    select : (d) => d?.data
  })

  useEffect(() => {
    reset(myHotel)
  }, [myHotel, reset])

    const { mutate, isLoading } = useMutation({
        mutationFn : (data) => hotelAPi.updateHotel(id,data),
        onSuccess : () => {
            console.log("Hotel Saved")
        },onError:(error) => {
            console.log(error)
        }

    })
    const onSubmit = async(data) => {
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("country", data?.country);
        formData.append("city", data?.city);
        formData.append("description", data?.description);
        formData.append("pricePerNight", data?.pricePerNight);
        formData.append("adultCount", data?.adultCount);
        formData.append("childCount", data?.childCount);
        formData.append("type", data?.type);

        data?.facilities.forEach((facility, index) => {
            formData.append(`facilities[${index}]`, facility)
        });
        if(data?.imageUrls){
          data?.imageUrls.map((imageUrl, index) => {
            formData.append(`imageUrls[${index}]`, imageUrl);
          })
        }
        Array.from(data?.imageFiles).forEach((imageFile) => {
            formData.append(`imageFiles`, imageFile)
        });
        mutate(formData);
    }

    

  return (
    <div className='my-5 w-full mr-5'>
        <h1 className={"text-2xl relative font-bold text-gray-700 before:absolute before:w-16 before:h-[3px] before:content-[''] before:bottom-0 before:left-0 before:bg-yellow-500"}>
            Add Hotel
        </h1>
        <div className='mt-4 md:mt-8 shadow-md px-5 py-6'>
            <FormProvider {...formMethods}>
                <form 
                    className='flex flex-col gap-4 md:gap-7 '
                    onSubmit={handleSubmit(onSubmit)}
                    enctype="multipart/form-data"
                >
                    <Details />
                    <Type />
                    <Facilities />
                    <Guests />
                    <ImageFIles />
                    <div className='flex justify-end'>
                        <button type="submit" disabled={isLoading} className='rounded-sm bg-blue-600 hover:bg-blue-500 px-4 py-2 text-white text-sm uppercase'>{isLoading ? "Loading..." : "Add Hotel"}</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    </div>
  )
}

export default AddHotel


