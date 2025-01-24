export const TopMenu = () => {
  return (
    <div className="flex gap-6 justify-center items-center h-fit w-96 mx-auto border border-white rounded-xl py-1 text-red-200  select-none">
      <div className="hover:border-green-700   border-transparent py-1 px-3 hover:border  hover:cursor-pointer tracking-tighter border">
        Home
      </div>
      <div className=" py-1 px-3 border border-transparent  hover:border hover:border-green-700 hover:cursor-pointer">
        Contact
      </div>
      <div className=" border border-transparent py-1 px-3 hover:border hover:border-green-700 hover:cursor-pointer">
        About me
      </div>
    </div>
  );
};
