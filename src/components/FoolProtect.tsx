import {
  quality,
  fastClock,
  optVariant,
  moneyReturn,
  individual,
} from './Icons'

export default function FoolProtect() {
  return (
    <div className="w-[76%] h-[333px] rounded-3xl gap-10 flex flex-col bg-main-color mb-[50px] p-5 justify-center items-center">
      <h4 className="text-[32px] text-white font-bold">Повний захист</h4>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-center gap-3 text-white font-bold text-[20px] w-[19%] max-w-[19%] text-center h-full">
          {quality}Гарантуємо якість
        </div>
        <div className="flex flex-col items-center gap-3 text-white font-bold text-[20px] w-[19%] max-w-[19%] text-center h-full">
          <div className="box-border w-[55px] h-[55px]">{fastClock}</div>Підбір
          запчастин за 20 хв
        </div>
        <div className="flex flex-col items-center gap-3 text-white font-bold text-[20px] w-[19%] max-w-[19%] text-center h-full">
          {optVariant}Порадимо оптимальний варіант
        </div>
        <div className="flex flex-col items-center gap-3 text-white font-bold text-[20px] w-[19%] max-w-[19%] text-center h-full">
          {moneyReturn}100% повернення коштів
        </div>
        <div className="flex flex-col items-center gap-3 text-white font-bold text-[20px] w-[19%] max-w-[19%] text-center h-full">
          {individual}Індивідуальний підхід
        </div>
      </div>
    </div>
  )
}
