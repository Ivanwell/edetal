'use client'

import { clock, telephone, logo } from './Icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex h-10 bg-regal-blue w-full items-center justify-around">
        <div className="flex gap-3 items-center text-base font-normal">
          {clock} Пн-Пт 9:00 - 19:00, Сб 10:00 - 15:00{' '}
        </div>
        <div className="flex gap-3 items-center text-base font-normal">
          Підтримуймо Україну разом --- Віримо у наше ЗСУ
        </div>
        <div className="flex gap-3 items-center text-base font-normal">
          {telephone} +38 (093) 728 - 94 - 85
        </div>
      </div>
      <div className="bg-main-color h-[110px] w-full flex items-center justify-start pl-[12%] pr-[12%] gap-16">
        <div className="pr-20">{logo}</div>
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'text-white text-[26px] font-bold relative h-full flex items-center'
              : 'text-white text-2xl font-normal'
          }
        >
          {pathname === '/' ? (
            <div className="absolute bottom-0 w-14 h-10 bg-white left-1/2 transform -translate-x-1/2 flex">
              <span className="w-[28px] bg-main-color rounded-br-[25px]"></span>
              <span className="w-[28px] bg-main-color rounded-bl-[25px]"></span>
            </div>
          ) : null}
          Головна
        </Link>
        <Link
          href="/payment_and_delivery"
          className={
            pathname === '/payment_and_delivery'
              ? 'text-white text-[26px] font-bold relative h-full flex items-center'
              : 'text-white text-2xl font-normal'
          }
        >
          {pathname === '/payment_and_delivery' ? (
            <div className="absolute bottom-0 w-14 h-10 bg-white left-1/2 transform -translate-x-1/2 flex">
              <span className="w-[28px] bg-main-color rounded-br-[25px]"></span>
              <span className="w-[28px] bg-main-color rounded-bl-[25px]"></span>
            </div>
          ) : null}
          Доставка та оплата
        </Link>
        <Link
          href="/contacts"
          className={
            pathname === '/contacts'
              ? 'text-white text-[26px] font-bold'
              : 'text-white text-2xl font-normal'
          }
        >
          Контакти
        </Link>
      </div>
    </div>
  )
}
