export const TopMenu = () => {
  return (
    <div className="flex gap-6 justify-center items-center h-fit w-96 mx-auto border border-white rounded-xl py-1 text-white tracking-widest select-none">
      <div className="tracking-tight border-b-2 border-transparent hover:border-b-2 hover:border-green-700 hover:cursor-pointer">
        Home
      </div>
      <div className="tracking-tight border-b-2 border-transparent hover:border-b-2 hover:border-green-700 hover:cursor-pointer">
        Contact
      </div>
      <div className="tracking-tight border-b-2 border-transparent hover:border-b-2 hover:border-green-700 hover:cursor-pointer">
        About me
      </div>
    </div>
  );
};
