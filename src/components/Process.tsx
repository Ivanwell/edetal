import ArrowRight from './ArrowRight'

export default function Process() {
  return (
    <div className="w-[76%] rounded-3xl flex flex-col bg-white h-[250px] mb-[50px] justify-center items-center gap-10 pl-4 pr-4">
      <h4 className="text-main-color font-bold text-[30px] leading-[36px]">
        Етапи покупки запчастин
      </h4>
      <div className="flex gap-3 items-center justify-between w-full">
        <div className="flex flex-col justify-center items-center w-[18%]">
          <ArrowRight />
          <h5 className="mt-3 text-[20px] font-bold text-center break-all">
            Оформлюйте <br /> заявку
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center w-[18%]">
          <ArrowRight />
          <h5 className="mt-3 text-[20px] font-bold text-center break-all">
            Отримуєте <br /> пропозицію
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center w-[18%]">
          <ArrowRight />
          <h5 className="mt-3 text-[20px] font-bold text-center break-all">
            Ви <br /> підтверджуєте
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center w-[18%]">
          <ArrowRight />
          <h5 className="mt-3 text-[20px] font-bold text-center break-all">
            Ми <br /> доставляємо
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center w-[18%]">
          <ArrowRight />
          <h5 className="mt-3 text-[20px] font-bold text-center break-all">
            Ваш <br /> відгук!
          </h5>
        </div>
      </div>
    </div>
  )
}
