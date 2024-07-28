import React from 'react'
import { FaHotel } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineAdd } from "react-icons/md";


const sidebarList = [
    {
        id:1,
        title : "Dashboard",
        link : "",
        icon : <FaHotel />
    },
    {
        id:2,
        title : "All Hotels",
        link : "/user/myHotels/lists",
        icon : <FaHotel />
    },
    {
        id:3,
        title : "Add Hotels",
        link : "/user/myHotels/add-hotel",
        icon : <MdOutlineAdd />
    },
    {
        id : 4,
        title : "Booked Hotels",
        link : "",
        icon : <IoBookmarksSharp />
    },
    {
        id : 5,
        title : "FAQ",
        link : "",
        icon : <FaQuestion />
    }

]
const Sidebar = () => {
  return (
    <div className="flex flex-col max-w-[200px] w-full h-[100vh] border-right py-8 shadow-lg">
        {
            sidebarList.map((item, index) => (
                <Link to={item.link} key={index} className='flex flex-row gap-2 px-5 py-2 items-center hover:bg-gray-200'>
                    <div> 
                        {
                            item.icon
                        }
                    </div>
                    <div className="text-[14px] font-bold">
                        {item.title}
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Sidebar