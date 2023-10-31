"use client";
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" relative bg-red-400 grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
      {children}
    </div>
  );
};

export default Container;
//className=" items-center justify-center mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4"
