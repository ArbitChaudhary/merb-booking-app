import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

export type SignUpDataType = {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    confirmPassword : string
}
const SignUp =() => {
    const {register, handleSubmit, watch, formState : {errors}} = useForm<SignUpDataType>();

    const onSubmit = handleSubmit(async(d) => {

    })
    return (
        <div className="flex flex-col gap-5 max-w-2xl mx-auto shadow-md my-10 px-7 py-7 rounded-md ">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-blue-900">Create an account</h1>
                <div className="mt-5">
                    <form 
                        className="flex flex-col gap-5"
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="text-[15px] text-gray-600 font-bold">
                                First Name
                                <input 
                                    type="text"
                                    className="border rounded-sm focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                                    {...register("firstName", { required : "First Name is required"})}
                                />
                                { errors && <p className="text-sm text-red-500">{errors.firstName?.message}</p> }
                            </label>
                            <label className="text-[15px] text-gray-600 font-bold">
                                Last Name
                                <input 
                                    type="text"
                                    className="border rounded-sm focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                                    {...register("lastName", { required : "Last name is required"})}
                                />
                                { errors && <p className="text-sm text-red-500">{errors.lastName?.message}</p> }
                            </label>
                        </div>
                        <label className="text-[15px] text-gray-600 font-bold">
                            Email
                            <input 
                                type="email"
                                className="rounded-sm border focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                                {...register("email", { required : "Email is required"})}
                            />
                        </label>
                        <label className="text-[15px] text-gray-600 font-bold">
                            Password
                            <input 
                                type="email"
                                className="rounded-sm border focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                                {...register("password", { required : "Email is required"})}
                            />
                        </label>
                        <label className="text-[15px] text-gray-600 font-bold">
                            C. Password
                            <input 
                                type="email"
                                className="rounded-sm border focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                                {...register("confirmPassword", { 
                                    validate : (val) => {
                                        if(!val){
                                            return "Confirm password is required"
                                        }else if(watch("password") !== val){
                                            return "Password did not match"
                                        }
                                    }
                                })}
                            />
                        </label>
                        <div className="flex justify-end">
                            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-sm transition duration-300">Create Account</button>
                        </div>
                        <div className="text-center">
                            <span className="text-sm text-gray-600">Already have an account?</span>{" "}
                            <span className="text-sm font-semibold text-blue-900">Go to Sign-in</span>
                        </div>
                        <button className="flex flex-row gap-1 bg-red-400 rounded-sm py-2 text-white font-bold items-center justify-center">
                            <FaGoogle />
                            <span>Sign-in with Google</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp;