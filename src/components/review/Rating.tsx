// { id: tripsId }: any
const Rating = ({ rating }: any) => {
  const maxRating = rating; // Maximum rating value

  const starArray = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div>
      <div>
        {starArray.map((starValue) => (
          <span key={starValue} className=" text-red-600 ">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
