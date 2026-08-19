import React from 'react'

function AdvertisingSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            Реклама
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            Размещение рекламы
          </h1>

          <p className="mt-5 text-base leading-7 text-[#625c50]">
            Разместите рекламу в нашем Telegram-канале.
            Ниже указаны варианты размещения и их стоимость.
          </p>
        </div>

        <div className="mt-12 max-w-4xl sm:mt-14">

          <h2 className="text-xl font-semibold text-[#29251d]">
            Реклама
          </h2>

          <div className="mt-5 divide-y divide-[#e8e1d2] border-y border-[#e8e1d2]">

            {[
              ["~1 день", "30 ⭐"],
              ["~3 дня", "40 ⭐"],
              ["~5 дней", "50 ⭐"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="text-[#625c50]">
                  {name}
                </span>

                <span className="font-medium text-[#9a7b32]">
                  {price}
                </span>
              </div>
            ))}

          </div>

          <h2 className="mt-12 text-xl font-semibold text-[#29251d]">
            Реклама конкурсом
          </h2>

          <div className="mt-5 divide-y divide-[#e8e1d2] border-y border-[#e8e1d2]">

            {[
              ["~30 человек", "40 ⭐"],
              ["~40 человек", "50 ⭐"],
              ["~50 человек", "60 ⭐"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-[#625c50]">
                  {name}
                </span>

                <span className="font-medium text-[#9a7b32]">
                  {price}
                </span>
              </div>
            ))}

          </div>

          <p className="mt-4 text-sm text-[#625c50]">
            Приз за наш счёт.
          </p>

          <h2 className="mt-12 text-xl font-semibold text-[#29251d]">
            Дополнительно
          </h2>

          <div className="mt-5 divide-y divide-[#e8e1d2] border-y border-[#e8e1d2]">

            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#625c50]">
                Закрепление в канале
              </span>

              <span className="font-medium text-[#9a7b32]">
                15 ⭐
              </span>
            </div>

            <div className="py-5">
              <p className="text-[#625c50]">
                Напоминание
              </p>

              <p className="mt-1 text-sm leading-6 text-[#625c50]">
                2 раза бесплатно, затем 3 раза — 15 ⭐
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-[#e8e1d2] pt-8">
            <p className="text-sm leading-6 text-[#625c50]">
              Возвраты не принимаются. Мы не несём ответственности
              за количество подписчиков после размещения рекламы.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdvertisingSection;