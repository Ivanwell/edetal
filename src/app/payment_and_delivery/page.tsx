export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh_-_374px)] bg-secondary-color flex flex-col items-center justify-center pt-[50px]">
      <h1 className="text-[28px] text-main-color font-bold">Як ми працюємо</h1>
      <div className="w-[76%] bg-white rounded-3xl mt-[30px] mb-[50px] p-10">
        <div className="w-full border-t-[2px] border-t-secondary-color border-t-solid flex flex-col border-b-[2px] border-b-secondary-color border-b-solid pb-3">
          <h2 className="text-main-color text-[24px] font-bold pt-3">
            Доставка
          </h2>
          <div className="pt-4 pb-4 pl-10 pr-10 flex flex-col">
            <h3 className="text-main-color text-[18px] font-bold">Терміни:</h3>
            <ul className="list-disc pl-0 ml-5 pt-2 text-[16px]">
              <li>
                Якщо <strong>Товар у нас на складі</strong> – відправимо в день
                замовлення;
              </li>
              <li className="pt-1">
                <strong>Товар на складі постачальника</strong> – на наступний
                день; замовлення;
              </li>
              <li className="pt-1">
                <strong>Товар з-за кордону</strong> – 16-30 днів.
              </li>
            </ul>
          </div>
          <div className="pt-4 pb-4 pl-10 pr-10 flex flex-col">
            <h3 className="text-main-color text-[18px] font-bold">
              Cпособи доставки:
            </h3>
            <ul className="list-disc pl-0 ml-5 pt-2 text-[16px]">
              <li>
                Автоперевізниками <strong>Нова Пошта, Міст-Експрес</strong> за
                наявними тарифами перевізника.
              </li>
              <li className="pt-1">
                Відправка на <strong>Таксі</strong> по місту;
              </li>
              <li className="pt-1">
                Можливий <strong>Самовивіз</strong> наявного товару у м. Львів.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-b-[2px] border-b-secondary-color border-b-solid pb-3">
          <h2 className="text-main-color text-[24px] font-bold pt-3">Оплата</h2>
          <div className="pt-4 pb-4 pl-10 pr-10 flex flex-col">
            <ul className="list-disc pl-0 ml-5 pt-2 text-[16px]">
              <li>
                <strong>Готівкою</strong> або <strong>карткою</strong> у
                відділенні перевізника;
              </li>
              <li className="pt-1">
                <strong>Готівкою</strong> або <strong>карткою</strong> при
                самовивозі;
              </li>
              <li className="pt-1">
                На <strong>безготівковий</strong> рахунок;
              </li>
              <li className="pt-1">
                При замовленні товару <strong>з-за кордону</strong> потрібно
                сплатити авансовий платіж в розмірі 30% від вартості замовлення;
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-b-[2px] border-b-secondary-color border-b-solid pb-3">
          <h2 className="text-main-color text-[24px] font-bold pt-3">
            Обмін та повернення
          </h2>
          <div className="pt-4 pb-4 pl-10 pr-10 flex flex-col">
            <ul className="list-disc pl-0 ml-5 pt-2 text-[16px]">
              <li>
                Покупець може повернути придбаний товар{' '}
                <strong>протягом 14 днів з моменту покупки</strong>, у випадку
                якщо товар не був встановлний на автомобіль чи пошкоджений з
                вини покупця.
              </li>
              <li className="pt-1">
                <strong>Товари електогрупи</strong> (датчики, паливні насоси)
                поверненню не підлягають, оскільки неможливо перевірити чи був
                товар в експлуатації;
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full border-b-[2px] border-b-secondary-color border-b-solid pb-3">
          <h2 className="text-main-color text-[24px] font-bold pt-3">
            Гарантія
          </h2>
          <div className="pt-4 pb-4 pl-10 pr-10 flex flex-col">
            <ul className="list-disc pl-0 ml-5 pt-2 text-[16px]">
              <li>
                Ми надаємо гарантію на усі наші запчастини на
                <strong>10 000 км пробігу або 2 місяці</strong> користування. В
                разі виявлення браку або швидкого виходу з ладу запчастини -
                повідомте нас. Претензії приймаються виключно якщо запчастина
                встановлювалась на спеціалізованому СТО та є відповідні акти
                виконаних робіт.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
