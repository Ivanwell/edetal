import {
  location,
  telFooter,
  telegramWhite,
  viberWhite,
  wtsWhite,
} from './Icons'

export default function Footer() {
  return (
    <div className="w-full h-56 bg-main-color flex justify-center items-center gap-20">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          {location} м. Львів
        </div>
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          {telFooter} +38 096 388 45 54
        </div>
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          <div className="w-[31px] h-31px]"></div>© edetal.store 2024
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          {telegramWhite} @eDetalStore
        </div>
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          {viberWhite} +38 096 388 45 54
        </div>
        <div className="flex gap-2 items-center text-[20px] text-white font-normal">
          {wtsWhite}edetal.store
        </div>
      </div>
    </div>
  )
}
