import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFail } from '../../redux/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import authApi from '../../api/data-set/authApi';


const Signin = () => {
    const {currentUser, error, loading} = useSelector((state) => state.auth)
    const {register, handleSubmit,watch, formState: {errors}}  = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn : (data) => authApi.signInUser(data),
        onSuccess : (d) => {
            console.log(d);
            dispatch(signInSuccess(d));
            localStorage.setItem('access_token', d?.data?.token)
            navigate("/");
        },
        onError : (error) => {
            console.log(error);
            dispatch(signInFail(error))
        }

        
    })

    const onSubmit =async(d) => {
        dispatch(signInStart())
        mutation.mutate(d)
    }
  return (
    <div className="max-w-2xl mx-auto flex flex-col md:gap-5 px-6 py-6 my-5 md:my-10 md:shadow-lg">
        <h1 className='lg:text-3xl md:text-2xl text-lg font-bold text-blue-950'>Welcome back mate!</h1>
        {
            error && <p>{error?.response?.data?.message}</p>
        }
        <form 
            className='flex flex-col gap-2 md:gap-5  '
            onSubmit={handleSubmit(onSubmit)}
        >
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
                <button type='submit' disabled={loading} className="px-2 md:px-5 py-1 md:py-2 rounded-sm bg-blue-600 hover:bg-blue-500 transition duration-300 text-white uppercase text-[10px] md:text-sm">{loading ? "Loading..." : "Sign-In"}</button>
            </div>
            <div className=' mt-2 md:mt-5 text-center'>
                <span className='text-gray-500 text-[12px] md:text-sm'> Don't hava an account?</span> {" "}
                <Link to="/register" className='text-[12px] md:text-sm font-bold text-blue-900 whitespace-nowrap'>Create account</Link>
            </div>
        </form>
    </div>
  )
}

export default Signin