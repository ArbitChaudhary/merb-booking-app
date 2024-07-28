import React from 'react'
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"
import hotelAPi from '../../../api/data-set/hotelAPi';
import { CiMap } from "react-icons/ci";
import { FaHotel } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";



const MyHotelList = () => {
    const {data: myHotelList } = useQuery({
        queryFn : () => hotelAPi.getMyHotels(),
        select : (d) => d?.data
    })
    console.log(myHotelList)
  return (
    <div className="space-y-5 w-full mr-5">
        <span className="flex flex-row gap-5 justify-between mt-7">
            <h1 className='text-xl text-gray-700 font-bold'>My Hotels</h1>
            <Link to={"/user/myHotels/add-hotel"} className='flex justify-self-end px-3 py-1 md:py-2 bg-blue-600 hover:bg-blue-500 rounded-sm text-sm uppercase text-white '>
                Add Hotel
            </Link>
        </span>
        <div className='flex flex-col gap-5'>
            {
                myHotelList?.myHotelList?.map((hotelList, index) => (
                    <div key={index} className="shadow-md p-3 rounded-sm">
                        <h1 className='text-[16px] font-bold text-gray-700'>{hotelList?.name}</h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-2 gap-4md: lg:gap-8'>
                            <div className='flex gap-1 items-center border rounded-sm px-2 py-1 w-full'>
                                <CiMap className=' '/>
                                <div className='text-[11px] leading-3 text-gray-500'>
                                    <span>{hotelList?.country}</span>, {" "} 
                                    <span>{hotelList?.city}</span>
                                </div>
                            </div>
                            <div className='flex gap-1 items-center border rounded-sm  px-2 py-1 w-full'>
                                <FaHotel className='text-sm text-gray-600'/>
                                <div className='text-[11px] leading-3 text-gray-500'>
                                    <span>{hotelList?.type}</span> {" "} 
                                    {/* <span>{hotelList?.city}</span> */}
                                </div>
                            </div>
                            <div className='flex gap-1 items-center border rounded-sm  px-2 py-1 w-full'>
                                <FaBed className='text-sm text-gray-600'/>
                                <div className='text-[11px] leading-3 text-gray-500'>
                                    <span>{hotelList?.adultCount} adults</span> 
                                   {hotelList?.childCount && <span>,{" "}{hotelList?.childCount} child</span>}
                                </div>
                            </div>
                            <div className='flex gap-1 items-center border rounded-sm  px-2 py-1 w-full'>
                                <FaMoneyCheckAlt className='text-sm text-gray-600'/>
                                <div className='text-[11px] leading-3 text-gray-500'>
                                    <span>{hotelList?.pricePerNight} per Night</span> 
                                   {/* {hotelList?.childCount && <span>,{" "}{hotelList?.childCount} child</span>} */}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mt-2 md:mt-5'>
                            <Link to={`/user/myHotels/edit-hotel/${hotelList?._id}`}
                                className='bg-blue-600 hover:bg-blue-500 rounded-sm text-white text-sm px-3 py-1 md:py-2'
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default MyHotelList