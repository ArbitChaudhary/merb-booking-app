import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


const Register = () => {
    const {register, handleSubmit,watch, formState: {errors}}  = useForm();

    const onSubmit =(d) => {
        console.log(d)
    }
  return (
    <div className="max-w-2xl mx-auto flex flex-col md:gap-5 px-6 py-6 my-5 md:my-10 md:shadow-lg">
        <h1 className='lg:text-3xl md:text-2xl text-lg font-bold text-blue-950'>Create an Account</h1>
        <form 
            className='flex flex-col gap-2 md:gap-5  '
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className='flex flex-col md:flex-row gap-2 md:gap-3 '>
                <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold flex-1">
                    First Name
                    <input 
                        type="text"
                        className='px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full'
                        {...register("firstName", { required : "This field is required"})}
                    />
                    {errors && <p className='text-xs text-red-600'>{errors.firstName?.message}</p> }
                </label>
                <label className=" text-[12px] md:text-[16px] text-gray-700 font-bold flex-1">
                    Last Name
                    <input 
                        type="text"
                        className='px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full'
                        {...register("lastName", { required : "This field is required"})}
                    />
                    { errors && <p className='text-xs text-red-600'>{errors.lastName?.message}</p> }

                </label>
            </div>
            <label className=" text-[12px] md:text-[16px] text-gray-700 font-bold flex-1">
                Email
                <input 
                    type="email"
                    className='px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full'
                    {...register("email", { required : "This field is required"})}
                />
                { errors && <p className='text-xs text-red-600'>{errors.email?.message}</p> }
            </label>
            <label className=" text-[12px] md:text-[16px] text-gray-700 font-bold flex-1">
                Password
                <input 
                    type="password"
                    className='px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full'
                    {...register("password", { required : "This field is required"})}
                />
                { errors && <p className='text-xs text-red-600'>{errors.password?.message}</p> }
            </label>
            <div className='flex justify-end mt-2 md:mt-3'>
                <button type='submit' className="px-2 md:px-5 py-1 md:py-2 rounded-sm bg-blue-600 hover:bg-blue-500 transition duration-300 text-white uppercase text-[10px] md:text-sm">Create User</button>
            </div>
            <div className='mt-5 text-center'>
                <span className='text-gray-500 text-[12px] md:text-sm'>Already hava an account?</span> {" "}
                <Link to="/sign-in" className='text-[12px] md:text-sm font-bold text-blue-900 whitespace-nowrap'>Go to Sign-in</Link>
            </div>
        </form>
    </div>
  )
}

export default Register