import { telegram, viber, whatsup } from './Icons'
import Link from 'next/link'

export default function MessageUs() {
  return (
    <div className="w-[76%] rounded-3xl flex flex-col border-solid border-main-color border-[1px] h-[240px] mt-10 relative mb-[50px] pt-5 pb-5">
      <span className="absolute leading-10 font-bold text-[32px] text-main-color bg-secondary-color pl-[30px] pr-[30px] top-[-23px] left-[50%] -translate-x-1/2">
        або пишіть нам
      </span>
      <div className="flex gap-5 items-center justify-center w-full">
        <Link href="/">{telegram}</Link>
        <Link href="/">{viber}</Link>
        <Link href="/">{whatsup}</Link>
      </div>
      <span className="font-bold text-[20px] text-center pt-3">
        Зекономте свій час на пошуки.{' '}
      </span>
      <span className="text-[20px] text-center pt-1">
        Відправте нам VIN авто та назву запчастини
      </span>
    </div>
  )
}
