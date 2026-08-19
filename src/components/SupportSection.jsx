import { Link } from "react-router-dom";



function SupportSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            Поддержка
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            Чем можем помочь?
          </h1>

          <p className="mt-5 text-base leading-7 text-[#625c50]">
            Если вы столкнулись с проблемой на сайте или у вас есть
            вопрос по Vanilla RP, выберите подходящий вариант ниже.
          </p>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-[#e8e1d2] border-y border-[#e8e1d2] sm:mt-14">

          <a
            href="https://t.me/bibr375"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium text-[#29251d]">
                Нашли ошибку на сайте?
              </p>

              <p className="mt-1 text-sm leading-6 text-[#625c50]">
                Сообщите об этом создателю сайта.
              </p>
            </div>

            <span className="text-sm text-[#625c50] group-hover:text-[#9a7b32]">
              Сообщить →
            </span>
          </a>

          <a
            href="https://t.me/perfect_norhings"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium text-[#29251d]">
                Есть вопрос по проекту?
              </p>

              <p className="mt-1 text-sm leading-6 text-[#625c50]">
                Напишите менеджеру Vanilla RP.
              </p>
            </div>

            <span className="text-sm text-[#625c50] group-hover:text-[#9a7b32]">
              Написать →
            </span>
          </a>

          <Link
            to="/advertising"
            className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium text-[#29251d]">
                Хотите разместить рекламу?
              </p>

              <p className="mt-1 text-sm leading-6 text-[#625c50]">
                Посмотрите условия и стоимость размещения.
              </p>
            </div>

            <span className="text-sm text-[#625c50] group-hover:text-[#9a7b32]">
              Реклама →
            </span>
          </Link>

        </div>

        <div className="mt-10 max-w-3xl border-t border-[#e8e1d2] pt-8">
          <p className="text-sm leading-6 text-[#625c50]">
            При обращении постарайтесь подробно описать проблему.
            Если речь идёт об ошибке сайта, можете приложить скриншот.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SupportSection;