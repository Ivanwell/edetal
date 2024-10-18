import { telBlue, telegram, viber, whatsup, storage } from '@/components/Icons'

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh_-_374px)] bg-secondary-color flex flex-col items-center justify-center pt-[50px]">
      <h1 className="text-[28px] text-main-color font-bold">У разі питань -</h1>
      <div className="text-[22px]">звертайтесь до наших менеджерів:</div>
      <div className="w-[76%] bg-white rounded-3xl mt-[30px] mb-[20px] p-10 flex justify-center gap-[20%]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[20px] h-[50px]">
            {telBlue} <a href="tel:+380963884554">+38 096 388 45 54</a>
          </div>
          <div className="flex items-center gap-2 text-[20px] h-[50px]">
            {storage}{' '}
            <a href="https://bayrakparts.com/">&nbsp;Автозапчастини онлайн</a>
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="flex items-center gap-2 text-[20px] h-[50px]">
            <div className="[&>*]:w-[50px] [&>*]:h-[50px]">{telegram}</div>
            <a href="tel:+380963884554">@eDetalStore</a>
          </div>
          <div className="flex items-center gap-2 text-[20px] h-[50px]">
            <div className="[&>*]:w-[50px] [&>*]:h-[50px]">{viber}</div>
            <a href="tel:+380963884554">+38 096 388 45 54</a>
          </div>
          <div className="flex items-center gap-2 text-[20px] h-[50px]">
            <div className="[&>*]:w-[50px] [&>*]:h-[50px]">{whatsup}</div>
            <a href="tel:+380963884554">edetal.store</a>
          </div>
        </div>
      </div>
      <h2 className="text-[22px] font-bold mt-5 mb-5">Графік роботи</h2>
      <div className="flex justify-center gap-12 w-[70%] pb-[50px] mb-[50px] border-b-[1px] border-b-solid border-b-main-color">
        <div className="flex flex-col items-end text-[20px] w-1/2 gap-1">
          <span>Понеділок - П'ятниця</span>
          <span>Субота</span>
          <span>Неділя</span>
        </div>
        <div className="flex flex-col items-start text-[20px] w-1/2 gap-1">
          <span>9:00 - 19:00</span>
          <span>10:00 - 15:00</span>
          <span>Вихідний</span>
        </div>
      </div>
      <span className="text-[22px]">Україна. м.Львів</span>
      <span className="text-[22px] mb-[70px] mt-[15px]">
        © edetal.store 2024
      </span>
    </div>
  )
}
