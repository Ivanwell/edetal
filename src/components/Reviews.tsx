'use client'
import { arrowLeft } from './Icons'
import OneReview from './OneReview'

export default function Reviews() {
  const listSlide = (direction: string) => {
    const element = document.getElementById('reviews')
    element?.scrollBy({
      left:
        direction === 'prev'
          ? -element.clientWidth / 2 - 10
          : element.clientWidth / 2 + 10,
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="w-[76%] rounded-3xl flex flex-col justify-between items-center bg-secondary-color h-[500px] mb-[50px]">
      <h5 className="text-main-color text-[30px] font-bold mt-[35px]">
        Відгуки
      </h5>
      <div className="flex w-full items-center h-full justify-between">
        <div className="cursor-pointer" onClick={() => listSlide('prev')}>
          {arrowLeft}
        </div>
        <div className="w-[90%] h-[90%] block">
          <div
            id="reviews"
            className="grid grid-cols-[repeat(4,1fr)] overflow-x-auto gap-5 [&::-webkit-scrollbar]:hidden"
          >
            <OneReview
              name="Юрій"
              car="Hyundai Sonata"
              image="https://static.wixstatic.com/media/1dd549_50651f02cb624625af249c3bc4259087~mv2.jpg/v1/fill/w_626,h_357,al_c,lg_1,q_80,enc_auto/1dd549_50651f02cb624625af249c3bc4259087~mv2.jpg"
            />
            <OneReview
              name="Назар"
              car="Jeep Compass"
              image="https://static.wixstatic.com/media/1dd549_111dbe81c08b4575a850a430721ea673~mv2.jpg/v1/fill/w_647,h_362,al_c,lg_1,q_80,enc_auto/1dd549_111dbe81c08b4575a850a430721ea673~mv2.jpg"
            />
            <OneReview
              name="Галина"
              car="KIA Venga"
              image="https://static.wixstatic.com/media/1dd549_6f21d4850b964cdf913e61c940b41186~mv2.jpg/v1/fill/w_647,h_367,al_c,lg_1,q_80,enc_auto/1dd549_6f21d4850b964cdf913e61c940b41186~mv2.jpg"
            />
            <OneReview
              name="Наталія"
              car="Ford Escape"
              image="https://static.wixstatic.com/media/1dd549_0a945f2d0ccd44a39e0decc02a8bb7ae~mv2.jpg/v1/fill/w_647,h_367,al_c,lg_1,q_80,enc_auto/1dd549_0a945f2d0ccd44a39e0decc02a8bb7ae~mv2.jpg"
            />
          </div>
        </div>
        <div
          onClick={() => listSlide('next')}
          className="rotate-180 cursor-pointer"
        >
          {arrowLeft}
        </div>
      </div>
    </div>
  )
}
