export const ContactForms = () => {
  return (
    <form className="col-span-2 text-white text-justify 2xl:text-lg grid grid-cols-2 grid-rows-5 gap-x-5 md:h-96 2xl:h-[30rem]">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="" className="font-bold">Nome</label>
        <input
          className="border border-white bg-white rounded-lg text-gray-950 p-1"
          type="text"
          name="user_name"
          placeholder="Cauã OSP"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="" className="font-bold">Email</label>
        <input
          className="border border-white bg-white rounded-lg text-gray-950 p-1"
          type="email"
          name="user_email"
          placeholder="cauaosp20@gmail.com"
        />
      </div>
      <div className="col-span-2 row-span-3 mt-1 flex flex-col gap-2">
        <label htmlFor="" className="font-bold">Mensagem</label>
        <textarea
          className=" border border-white w-full md:min-h-36 md:max-h-52 2xl:min-h-48 max-h-72 bg-white rounded-lg text-gray-950 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-white select-text p-1"
          name="message"
          placeholder="Digite sua mensagem"
        />
      </div>
      <input
        className=" border border-white/25 w-fit h-fit  py-1 px-2 rounded-lg bg-white/10 cursor-pointer hover:bg-white/20 font-bold"
        type="submit"
        value="Enviar"
      />
    </form>
  );
};
