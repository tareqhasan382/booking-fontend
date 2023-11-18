"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { ChangeEvent } from "react";

declare global {
  var cloudinary: any;
}

type Inputs = {
  title: string;
  description: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  price: number;
  userId: string;
  imageSrc: string;
};

import { useRouter } from "next/navigation";
import { useAddPackagesMutation } from "@/redux/api/packageApi";
import { useState } from "react";
import { getUserInfo } from "@/utils/auth.service";
import { toast } from "react-toastify";

const AddPackage = () => {
  const router = useRouter();
  const userInfo: any = getUserInfo();
  const userId = userInfo?.id;
  const [addPackages, { isLoading }] = useAddPackagesMutation();
  const [image, setImage] = useState<File | undefined>();

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      //setImage(e.target.files[0]);
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "Reservation");
      const uploadResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const uploadedImageData = await uploadResponse.json();
      const imageUrl = uploadedImageData.secure_url;
      setImage(imageUrl);
      //console.log("imageUrl:", imageUrl);
    }
  };
  // console.log("imageUrl:", image);
  //======================================
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const uploadInfo = {
      title: data.title,
      description: data.description,
      category: data.category,
      roomCount: Number(data.roomCount),
      bathroomCount: Number(data.bathroomCount),
      guestCount: Number(data.guestCount),
      locationValue: data.locationValue,
      price: Number(data.price),
      userId: userId,
      imageSrc: image,
    };
    console.log("data:", uploadInfo);
    const res: any = await addPackages({ ...uploadInfo });
    if (res?.data) {
      reset(),
        toast.success("Package Created Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      router.refresh();
      // router.push("/login");
    } else {
      toast.error("Package Does't created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className=" bg-white w-full p-8 ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>
            <input
              //required
              {...register("title", { required: true })}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="title"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.title?.message}
            </p>
            {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Category
            </label>
            <input
              required
              {...register("category")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="category"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.category?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Room Count
            </label>
            <input
              required
              {...register("roomCount")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.roomCount?.message}
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Bathroom Count
            </label>
            <input
              required
              {...register("bathroomCount")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.bathroomCount?.message}
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Guest Count
            </label>
            <input
              required
              {...register("guestCount")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.guestCount?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Price
            </label>
            <input
              required
              {...register("price")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.price?.message}
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Location
            </label>
            <input
              required
              {...register("locationValue")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="adress"
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.locationValue?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-row  -mx-3 mb-6">
          <div className=" w-full  px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="imageSrc"
            >
              Upload Image
            </label>
            <input
              required
              onChange={handleImageChange}
              // {...register("imageSrc")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="imageSrc"
              type="file"
              placeholder="image"
            />
            <p className=" text-red-500 text-xs italic ">
              {/* {errors.imageSrc?.message} */}
            </p>
          </div>
          <div className="w-full px-3">
            <label
              htmlFor="description"
              className="block font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              aria-required
              {...register("description")}
              id="description"
              name="description"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <p className=" text-red-500 text-xs italic ">
              {errors.description?.message}
            </p>
          </div>
        </div>

        {/*========================= image upload ================================*/}

        <button
          disabled={isLoading}
          className="w-full px-3 bg-black text-white rounded py-2 text-xl font-bold "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPackage;
