import React from 'react'

function AboutSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            О проекте
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            История Vanilla RP
          </h2>

          <p className="mt-5 text-base leading-7 text-[#625c50] sm:text-lg sm:leading-8">
            Vanilla RP — это проект, созданный для тех, кому нравится
            ролевой формат и возможность придумывать собственные истории.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[180px_1fr] lg:gap-12">

          <div>
            <p className="text-3xl font-bold text-[#9a7b32]">
              24.04
            </p>

            <p className="mt-1 text-sm text-[#625c50]">
              2026
            </p>
          </div>

          <div className="border-l-0 border-[#e8e1d2] pl-0 sm:border-l-2 sm:pl-8">
            <h3 className="text-xl font-semibold text-[#29251d] sm:text-2xl">
              Открытие проекта
            </h3>

            <p className="mt-4 leading-7 text-[#625c50]">
              Именно в этот день Vanilla RP начал своё существование.
              С этого момента проект начал развиваться, а вокруг него
              стало появляться собственное сообщество.
            </p>
          </div>

        </div>

        <div className="mt-12 border-y border-[#e8e1d2] py-8 sm:mt-16 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-[#9a7b32]">
                Сейчас
              </p>

              <h3 className="mt-1 text-xl font-semibold text-[#29251d] sm:text-2xl">
                Vanilla RP продолжает развиваться
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#625c50]">
              Следить за новостями проекта, обновлениями и событиями
              можно в нашем Telegram-канале.
            </p>

          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://t.me/VAN1LLAPROJECTT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#9a7b32] hover:text-[#725b25]"
          >
            Telegram-канал Vanilla RP →
          </a>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;