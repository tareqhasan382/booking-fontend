"use client";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  comment: string;
  userId: string;
  tripsId: string;
  rating: number;
};
import { useState } from "react";
import { useAddReviewMutation } from "@/redux/api/reviewApi";
import { toast } from "react-toastify";
const Review = ({ id: tripsId }: any) => {
  // =================isLoggedIn=======================
  const userLoggedIn = isLoggedIn();

  //========================isLoggedIn===================
  const [addReview] = useAddReviewMutation();

  const ratingData = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(1);
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const userInfo: any = getUserInfo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const info = {
      comment: data.comment,
      tripsId: tripsId,
      userId: userInfo.id,
      rating: rating,
    };
    //console.log(info);
    const res: any = await addReview(info);
    console.log(res?.data);
    if (res?.data) {
      toast.success("Review Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
    } else {
      toast.error(res?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className=" w-full py-3 ">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-row items-center justify-center gap-3 ">
            <input
              required
              {...register("comment")}
              type="text"
              className="peer h-full w-[90%] rounded-[7px] border border-rose-500 px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0  "
              placeholder=" say something.... "
            />
            <div>
              {ratingData.map((value) => (
                <span
                  key={value}
                  className={`text-2xl cursor-pointer ${
                    value <= rating
                      ? "text-gray-500 hover:text-yellow-600 "
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingChange(value)}
                >
                  ⭐
                </span>
              ))}
            </div>
            {userLoggedIn && (
              <button
                type="submit"
                className=" px-5 py-2.5 bg-rose-400 rounded-[7px] text-xl font-bold "
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
