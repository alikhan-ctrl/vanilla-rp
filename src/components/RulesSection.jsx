import React from 'react'

function RulesSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            Правила
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            Правила Vanilla RP
          </h1>

          <p className="mt-5 text-base leading-7 text-[#625c50]">
            Перед началом игры ознакомьтесь с основными правилами
            проекта. Раздел будет дополняться по мере необходимости.
          </p>
        </div>

        <div className="mt-12 max-w-4xl sm:mt-16">

          <h2 className="text-2xl font-semibold text-[#29251d]">
            Правила скинов
          </h2>

          <div className="mt-6 space-y-6">

            <div className="border-l-2 border-[#d8c99e] pl-4 sm:pl-5">
              <h3 className="font-medium text-[#29251d]">
                Скины
              </h3>

              <p className="mt-2 break-words leading-7 text-[#625c50]">
                Скины должны быть сделаны без НРП, без белой кожи,
                хедресса, кобрлоска и других подобных элементов.
              </p>

              <p className="mt-2 leading-7 text-[#625c50]">
                Подобные скины запрещены на РП.
              </p>
            </div>

            <div className="border-l-2 border-[#d8c99e] pl-4 sm:pl-5">
              <h3 className="font-medium text-[#29251d]">
                Фото
              </h3>

              <p className="mt-2 leading-7 text-[#625c50]">
                На РП необходимо подготовить два реалистичных фото
                персонажа.
              </p>
            </div>

          </div>
        </div>

        <div className="mt-12 max-w-4xl sm:mt-14">
          <h2 className="text-2xl font-semibold text-[#29251d]">
            Био
          </h2>

          <div className="mt-6 border-l-2 border-[#d8c99e] pl-4 sm:pl-5">
            <p className="leading-7 text-[#625c50]">
              Био — это описание вашего персонажа.
            </p>

            <p className="mt-3 leading-7 text-[#625c50]">
              Правильное био выглядит следующим образом:
            </p>

            <div className="mt-4 overflow-x-auto rounded-lg bg-[#f1e5bd] px-4 py-4 text-sm leading-6 text-[#4b4027] sm:px-5">
              1 строка: имя | возраст | роль
              <br />
              2 строка: о себе
              <br />
              3 строка: о себе | при себе
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl sm:mt-14">
          <h2 className="text-2xl font-semibold text-[#29251d]">
            Как заходить на RP
          </h2>

          <div className="mt-6 border-l-2 border-[#d8c99e] pl-4 sm:pl-5">
            <p className="leading-7 text-[#625c50]">
              Перед началом необходимо занять роль под постом,
              там будет указано, что нужно сделать.
            </p>

            <p className="mt-3 leading-7 text-[#625c50]">
              В посте также будет указано время начала. В это время
              будет отправлена ссылка на ВИП-сервер в Брукхевене.
            </p>

            <p className="mt-3 leading-7 text-[#625c50]">
              После входа вам даётся 5–10 минут на био и скины.
              После этого проводящий РП отведёт вас на место
              проведения и сообщит, когда оно начнётся.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-4xl sm:mt-14">
          <h2 className="text-2xl font-semibold text-[#29251d]">
            Отыгровка и знаки
          </h2>

          <div className="mt-6 border-l-2 border-[#d8c99e] pl-4 sm:pl-5">

            <p className="leading-7 text-[#625c50]">
              В РП используется несколько специальных знаков.
            </p>

            <div className="mt-5 space-y-3">

              <div className="break-words">
                <span className="font-medium text-[#29251d]">
                  *действие
                </span>

                <span className="text-[#625c50]">
                  {" "}— отыгровка действия.
                </span>
              </div>

              <div className="break-words">
                <span className="font-medium text-[#29251d]">
                  //не рп
                </span>

                <span className="text-[#625c50]">
                  {" "}— сообщение вне ролевой игры.
                </span>
              </div>

            </div>

            <div className="mt-5 rounded-lg bg-[#f1e5bd] px-4 py-4 text-sm text-[#4b4027] sm:px-5">
              Пример: *села за стол.
            </div>

          </div>
        </div>

        <div className="mt-14 border-t border-[#e8e1d2] pt-8 sm:mt-16">
          <p className="text-sm text-[#9a7b32]">
            Раздел будет обновляться
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#625c50]">
            В дальнейшем здесь появятся дополнительные правила,
            включая правила чата и другие правила проекта.
          </p>
        </div>

      </div>
    </section>
  );
}

export default RulesSection;