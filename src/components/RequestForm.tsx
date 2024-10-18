export default function Form() {
  return (
    <div className="w-[76%] rounded-3xl flex flex-col border-solid border-[1px] border-main-color h-[300px] bg-main-color mb-[60px] justify-end">
      <h3 className="w-full text-white text-[32px] font-bold text-center flex items-center justify-center mb-6">
        Заповніть форму – і за 20хв ціна у вас
      </h3>
      <div className="w-full h-[200px] bg-white rounded-3xl flex items-start relative">
        <div className="h-[114px] w-[50%] pl-8 pr-8 flex flex-col gap-5 pt-[25px]">
          <div className="flex justify-between items-center text-[20px]">
            <label className="text-[20px] font-normal">VIN код авто:</label>
            <input
              placeholder="---- ---- ---- -----"
              className="h-[47px] w-[325px] text-[20px] border-solid border-[1px] border-border-light rounded-[7px] indent-3 focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center text-[20px]">
            <label className="text-[20px] font-normal">Ваш телефон:</label>
            <input
              placeholder="+380 --- -- --"
              className="h-[47px] w-[325px] border-solid border-[1px] border-border-light rounded-[7px] indent-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="h-[134px] w-[50%] pl-8 pr-8 flex pt-[25px] justify-between text-[20px]">
          <label className="text-[20px] font-normal">
            Які запчастини потрібно:
          </label>
          <textarea className="h-full min-w-[325px] grow border-solid border-[1px] border-border-light rounded-[7px] indent-3 focus:outline-none"></textarea>
        </div>
        <button className="w-[426px] bg-orange-btn h-[72px] rounded-[41px] text-[32px] font-bold mt-10 mb-10 absolute bottom-[-75px] left-[50%] -translate-x-1/2 text-white">
          Дізнатись ціну
        </button>
      </div>
    </div>
  )
}
