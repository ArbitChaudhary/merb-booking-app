import { useState } from "react"
import { Link } from "react-router-dom"


const Header  = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <div className="bg-blue-900 shadow-md max-w-6xl mx-auto w-full">
            <div className="flex flex-row justify-between gap-5 items-center px-4 py-4">
                <div className="text-3xl font-black text-white">MyBooking.com</div>
                <div className="relative">
                    {
                        isLoggedIn ? (
                            <div className="h-12 w-12 rounded-full border-2 border-white overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6InNDBUBmPvKrzP3zfnKcQsP0xKD54h9vJA&s" 
                            alt="Sudha Chaudhary"
                            className="h-full w-full object-cover"
                        />
                    </div>
                        ): (
                            <button className="rounded-sm bg-white px-5 py-2 text-blue-900 ">
                                <Link to="/sign-in">
                                    Signin
                                </Link>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Header