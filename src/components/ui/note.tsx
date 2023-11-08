{
  data?.data?.map((item: any) => (
    <div key={item.id} className=" bg-blue-500 h-auto w-[260px] p-2 rounded ">
      <div className=" object-cover ">
        <Image
          src="/images/cardimg.jpg"
          height={400}
          width={400}
          alt="img"
          className=" rounded"
        />
      </div>
      <div className=" w-full text-white flex flex-col items-center justify-center ">
        <h3 className=" text-lg font-bold ">Graphic Design </h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <p>Price: $20</p>
        <Link href={`package/${item.id}`} className=" w-full bg-white rounded ">
          <button className=" w-[100%]   text-black h-10 rounded text-lg ">
            Details
          </button>
        </Link>
      </div>
    </div>
  ));
}
