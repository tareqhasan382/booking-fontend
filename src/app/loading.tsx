const Loading = () => {
  return (
    <div className=" pt-[70px] h-screen bg-slate-500s w-screen flex items-center justify-center text-center text-3xl">
      <h3
        className=" inline-block h-5 animate-pulse text-center text-3xl "
        style={{ animationDelay: `100s`, animationDirection: "300s" }}
      >
        Loading..........
      </h3>
    </div>
  );
};

export default Loading;
