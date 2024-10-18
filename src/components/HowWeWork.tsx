import { handShake } from './Icons'

export default function HowWeWork() {
  return (
    <div className="w-[76%] bg-white rounded-3xl flex flex-col h-[359px] mb-[50px] items-center p-8">
      <h4 className="text-main-color text-[32px] font-bold">Як ми працюємо</h4>
      <div className="flex w-full justify-between items-center h-full">
        <h4 className="text-[32px] font-bold leading-[40px] w-[calc(50%_-_125px)] text-center">
          Ви нам- VIN код та перелік запчастин{' '}
        </h4>
        <div className="w-[210px] h-[210px] rotate-[-120deg] relative rounded-[50%] border-main-color border-[3px] border-solid after:absolute after:content-[''] after:border-r-solid after:border-t-solid after:border-r-main-color after:border-t-main-color after:border-r-[3px] after:border-t-[3px] after:w-[26px] after:h-[26px] after:rotate-[310deg] after:top-[95px] after:left-[-13px] before:absolute before:content-[''] before:border-r-solid before:border-t-solid before:border-r-main-color before:border-t-main-color before:border-r-[3px] before:border-t-[3px] before:w-[26px] before:h-[26px] before:rotate-[130deg] before:top-[80px] before:right-[-14px] flex justify-center items-center">
          <div className="w-40 h-40 rounded-[50%] bg-secondary-color flex items-center justify-center rotate-[120deg]">
            {handShake}
          </div>
        </div>
        <h4 className="text-[32px] font-bold leading-[40px] w-[calc(50%_-_125px)] text-center">
          Ми Вам – пропозиції з цінами та термінами
        </h4>
      </div>
    </div>
  )
}
