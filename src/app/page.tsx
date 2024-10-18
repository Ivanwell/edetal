import MainBaner from '@/components/MainBaner'
import OrderButton from '@/components/OrderButton'
import HowWeWork from '@/components/HowWeWork'
import EasyTitle from '@/components/EasyTitle'
import Form from '@/components/RequestForm'
import MessageUs from '@/components/MessageUs'
import FoolProtect from '@/components/FoolProtect'
import Process from '@/components/Process'
import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <div className="w-full h-full pt-[50px] flex flex-col bg-secondary-color items-center justify-start">
      <MainBaner />
      <OrderButton title="Замовити" />
      <HowWeWork />
      <EasyTitle title="Це просто:" />
      <Form />
      <MessageUs />
      <FoolProtect />
      <Process />
      <Reviews />
    </div>
  )
}
