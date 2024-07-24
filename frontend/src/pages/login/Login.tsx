import { useForm } from "react-hook-form";

export type FormDataType = {
    email : string,
    password : string,
}

const Login = () => {
    const {register, handleSubmit, formState : { errors }} = useForm<FormDataType>()
    return(
        <div className="max-w-2xl mx-auto my-10 shadow-md px-7 py-7 flex flex-col gap-5">
            <div className="flex flex-col">
                <h1 className="text-blue-500 text-xl font-bold uppercase">Welcome back</h1>
                <span className="text-sm text-gray-500">
                    Please signin to get the best servies for your travel
                </span>
            </div>
            <div className="flex flex-col">
                <form className="flex flex-col gap-5">
                    <label className="text-[15px] text-gray-600 font-semibold">
                        Email
                        <input 
                            type="email" 
                            className="border focus:outline-blue-200 focus:shadow-sm px-4 py-2 w-full"
                            {...register("email", { required : "Email is required"})}
                        />
                        { errors && <p className="text-xs text-red-500 font-semibold">{errors.email?.message}</p> }
                    </label>
                    <label className="text-[15px] text-gray-600 font-semibold">
                        Password
                        <input type="password"
                        className="border focus:outline-blue-200 focus:shadow-md px-4 py-2 w-full"
                        {...register("password", { required : "Password is required"})}
                        />
                    </label>
                    <button type="submit" className="rounded-sm px-5 py-2 bg-blue-500 text-white text-sm font-semibold w-fit">Sign-in</button>
                </form>
                <div className="mx-auto my-5">
                    <span> Don't have an account? </span>{" "}
                    <span className="text-sm font-semibold text-blue-800">Create an Account</span>
                </div>
            </div>
        </div>
    )
}
export default Login;