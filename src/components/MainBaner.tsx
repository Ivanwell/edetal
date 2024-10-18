import Image from 'next/image'
import { time } from './Icons'

export default function MainBaner() {
  return (
    <div className="w-[76%] bg-white rounded-3xl flex flex-col">
      <div className="bg-main-color rounded-3xl w-full h-[350px] flex items-center justify-between">
        <div className="flex flex-col text-white p-5 items-center w-[35%] h-full justify-center gap-8">
          <h1 className="font-bold text-[43px] leading-[49px] ml-3 w-full sm:text-[20px] md:text-[30px] lg:text-[35px] xl:text-[43px]">
            Продаж автозапчастин
          </h1>
          <div className="flex justify-start w-full gap-3 ml-3 items-center box-border">
            <div className="box-border flex items-center justify-center">
              {time}
            </div>
            <span className="text-[24px] font-normal leading-[31px]">
              Прорахунок у вас – <br /> вже за 20 хвилин
            </span>
          </div>
        </div>
        <Image
          src="/baner.png"
          alt="baner"
          height={350}
          width={1000}
          className="max-w-[65%] h-[350px] object-cover overflow-hidden rounded-3xl"
        />
      </div>
      <div className="w-full p-10 flex justify-between">
        <div className="flex flex-col w-[28%] h-full justify-between">
          <h2 className="text-main-color font-bold text-3xl">Запчастини</h2>
          <span className="pt-3 text-[19px] font-normal leading-[29px]">
            до європейських, американських, корейських та японських автомобілів
          </span>
        </div>
        <div className="flex flex-col w-[28%] h-full justify-between">
          <h2 className="text-main-color font-bold text-3xl">Асортимент</h2>
          <span className="pt-3 text-[19px] font-normal leading-[29px]">
            Більше 300 000 позицій в наявності та під замовлення
          </span>
        </div>
        <div className="flex flex-col w-[28%] h-full justify-between flex-initial">
          <h2 className="text-main-color font-bold text-3xl">Доставка</h2>
          <span className="pt-3 text-[19px] font-normal leading-[29px]">
            Відправляємо в день замовлення, або на наступний
          </span>
        </div>
      </div>
    </div>
  )
}
