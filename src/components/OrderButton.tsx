export default function OrderButton({ title }: { title: string }) {
  return (
    <button className="w-[426px] bg-orange-btn h-[72px] rounded-[41px] text-[32px] font-bold mt-10 mb-10 text-white">
      {title}
    </button>
  )
}
