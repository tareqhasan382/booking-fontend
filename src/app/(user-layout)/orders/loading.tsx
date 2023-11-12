const Loading = () => {
  return (
    <div className=" pt-[70px] h-screen w-screen bg-slate-500s flex items-center justify-center text-center text-3xl">
      <h3
        className=" h-5 animate-pulse text-center text-3xl "
        style={{ animationDelay: "300s", animationDirection: "300s" }}
      >
        Loading..........
      </h3>
    </div>
  );
};

export default Loading;
