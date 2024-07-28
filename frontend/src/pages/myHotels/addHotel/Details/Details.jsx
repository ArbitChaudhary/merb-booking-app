import React from "react";
import { useFormContext } from "react-hook-form";

const Details = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold flex-1">
        Name
        <input
          type="text"
          className="px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full"
          {...register("name", { required: "This field is required" })}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors.name?.message}</p>
        )}
      </label>
      <div className="flex flex-col md:flex-row gap-2 md:gap-3">
      <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold flex-1">
        Country
        <input
          type="text"
          className="px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full"
          {...register("country", { required: "This field is required" })}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors.country?.message}</p>
        )}
      </label>
      <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold flex-1">
        City
        <input
          type="text"
          className="px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full"
          {...register("city", { required: "This field is required" })}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors.city?.message}</p>
        )}
      </label>
      </div>
      <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold max-w-[50%]">
        Price per Night
        <input
          type="number"
          className="px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full"
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors.pricePerNight?.message}</p>
        )}
      </label>
      <label className=" text-[12px] md:text-[15px] text-gray-700 font-bold flex-1">
        Description
        <textarea
          type="number"
          className="px-2 md:px-4 py-1 md:py-2 border rounded-sm focus:outline-blue-200 focus:shadow-sm w-full"
          {...register("description", { required: "This field is required" })}
        />
        {errors && (
          <p className="text-xs text-red-600">{errors.description?.message}</p>
        )}
      </label>
    </div>
  );
};

export default Details;
