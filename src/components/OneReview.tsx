export default function OneReview({ name, car, image }) {
  return (
    <div className="w-[calc(100vw_*_0.45_*_0.76_-_16px)] rounded-3xl bg-white flex flex-col justify-center items-center pb-8">
      <span className="text-center pt-3 text-[22px] pb-3">
        <strong>{name}</strong>
        <br />
        {car}
      </span>
      <img className="max-w-[90%]" src={image} alt={`review ${name}`} />
    </div>
  )
}
