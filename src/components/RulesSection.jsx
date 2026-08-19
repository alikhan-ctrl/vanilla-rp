import React from "react";

function RulesSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        {/* Заголовок */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            Vanilla RP
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            Правила проекта
          </h1>

          <p className="mt-5 text-base leading-7 text-[#625c50]">
            Перед участием в RP ознакомьтесь с основными правилами.
            Незнание правил не освобождает от ответственности.
          </p>
        </div>

        {/* Быстрые правила */}
        <div className="mt-10 max-w-3xl border-y border-[#e8e1d2] py-6">
          <p className="text-sm font-medium text-[#29251d]">
            Перед RP необходимо:
          </p>

          <ol className="mt-4 space-y-2 text-[#625c50]">
            <li>1. Слушать проводящего.</li>
            <li>2. Сделать правильное био.</li>
            <li>3. Знать термины и знаки.</li>
            <li>4. Хорошо отыгрывать свою роль.</li>
            <li>5. Не ссориться с участниками в чате.</li>
            <li>6. Не грубить проводящему и стаффу.</li>
            <li>7. Не нарушать RP.</li>
            <li>8. Не использовать НРП-скины.</li>
            <li>9. Не проводить RP без одобрения.</li>
          </ol>
        </div>

        {/* I. Скины */}
        <RuleBlock title="I. Скины">

          <RuleItem number="1.1">
            <p>
              Скин должен соответствовать ролевой ситуации.
              НРП-скины запрещены.
            </p>

            <p>
              Запрещены белая кожа, хедлесс, коблокс и другие
              элементы, которые делают персонажа нереалистичным.
            </p>
          </RuleItem>

          <RuleItem number="1.2">
            <p>
              Перед RP необходимо подготовить минимум два
              реалистичных фото персонажа.
            </p>
          </RuleItem>

        </RuleBlock>

        {/* II. Био */}
        <RuleBlock title="II. Правильное био">

          <RuleItem number="2.1">
            <p>
              Био — это краткое описание вашего персонажа.
            </p>

            <p>
              В нём должна быть информация о персонаже,
              соответствующая выбранной роли.
            </p>
          </RuleItem>

          <div className="mt-5 rounded-lg bg-[#f1e5bd] px-4 py-4 text-sm leading-7 text-[#4b4027] sm:px-5">
            <p className="font-medium">Пример:</p>

            <p className="mt-2">
              мари | 18 у.о | житель
            </p>

            <p>
              добрая, доверчивая | п.с.: телефон
            </p>
          </div>

        </RuleBlock>

        {/* III. Как заходить */}
        <RuleBlock title="III. Как заходить на RP">

          <RuleItem number="3.1">
            <p>
              Перед началом необходимо занять роль под постом.
            </p>
          </RuleItem>

          <RuleItem number="3.2">
            <p>
              В посте будет указано время начала RP.
              В указанное время будет отправлена ссылка
              на VIP-сервер в Brookhaven.
            </p>
          </RuleItem>

          <RuleItem number="3.3">
            <p>
              После входа даётся 5–10 минут на подготовку
              био и скина.
            </p>
          </RuleItem>

          <RuleItem number="3.4">
            <p>
              После подготовки проводящий отведёт участников
              на место проведения RP и сообщит о начале.
            </p>
          </RuleItem>

        </RuleBlock>

        {/* IV. Отыгровка */}
        <RuleBlock title="IV. Отыгровка и знаки">

          <RuleItem number="4.1">
            <p>
              <span className="font-medium text-[#29251d]">
                *действие
              </span>
              {" "}— описание действия персонажа.
            </p>

            <div className="mt-3 rounded-lg bg-[#f1e5bd] px-4 py-3 text-sm text-[#4b4027]">
              Пример: *села за стол.
            </div>
          </RuleItem>

          <RuleItem number="4.2">
            <p>
              <span className="font-medium text-[#29251d]">
                //не рп
              </span>
              {" "}— сообщение вне ролевой игры.
            </p>
          </RuleItem>

        </RuleBlock>

        {/* V. Правила чата */}
        <RuleBlock title="V. Правила чата">

          <RuleItem number="5.1">
            <p>
              Агрессия, ссоры, провокации и токсичное поведение
              запрещены.
            </p>

            <Penalty>
              Наказание: мут 30 минут всем участникам конфликта.
              <br />
              Повтор: мут 1 час + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.2">
            <p>
              Политические и религиозные темы, расизм, нацизм,
              сексизм, ЛГБТ и провокационные высказывания запрещены.
            </p>

            <Penalty>
              Наказание: мут 1 час + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.3">
            <p>
              NSFW, порно, расчленёнка и шок-контент категорически
              запрещены.
            </p>

            <Penalty>
              Наказание: моментальный перманентный бан + 3 варна.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.4">
            <p>
              Спам, флуд и оффтоп запрещены.
            </p>

            <Penalty>
              Наказание: мут 15 минут.
              <br />
              Повтор: мут 30 минут + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.5">
            <p>
              Оскорбления, травля, угрозы и неуважение к участникам
              и администрации запрещены.
            </p>

            <Penalty>
              Для участников: мут 30 минут.
              <br />
              За оскорбление администрации: мут 1 час + варн.
              <br />
              Повтор: мут 1 час 30 минут + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.6">
            <p>
              Любая реклама, приглашения в другие чаты и ссылки
              без разрешения администрации запрещены.
            </p>

            <Penalty>
              Наказание: моментальный перманентный бан + 3 варна.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.7">
            <p>
              Попытка обойти наказание через второй аккаунт
              также является нарушением.
            </p>

            <Penalty>
              Наказание: удвоение текущего срока + 2 варна.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.8">
            <p>
              Эпилептический контент, мигающие GIF, видео и
              подобные материалы запрещены.
            </p>

            <Penalty>
              Наказание: мут 30 минут.
              <br />
              Повтор: мут 1 час + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.9">
            <p>
              Слив личной информации, переписок, адресов,
              фотографий и других данных запрещён.
            </p>

            <Penalty>
              Наказание: моментальный перманентный бан.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.10">
            <p>
              Каллы и вызовы в чате без разрешения администрации
              запрещены.
            </p>

            <Penalty>
              Наказание: варн.
              <br />
              Повтор: мут 1 час + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.11">
            <p>
              Оффтоп от 3 сообщений подряд запрещён.
            </p>

            <Penalty>
              Наказание: мут 10 минут.
              <br />
              По решению администрации срок может быть увеличен.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.12">
            <p>
              Распространение ложной информации, фейков
              и неправдивых сведений запрещено.
            </p>

            <Penalty>
              Наказание: мут 1 час.
              <br />
              Повтор: мут 6 часов + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.13">
            <p>
              Спам «лесенкой» от 5 сообщений запрещён.
            </p>

            <Penalty>
              Наказание: мут 30 минут.
              <br />
              Повтор: мут 1 час + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.14">
            <p>
              Спам командами или ботами от 5 сообщений запрещён.
            </p>

            <Penalty>
              Наказание: мут 1 час + варн.
              <br />
              Повтор: мут 3 часа + варн навсегда.
            </Penalty>
          </RuleItem>

          <RuleItem number="5.15">
            <p>
              Оскорбление родственников запрещено.
            </p>

            <Penalty>
              Наказание: мут 2 часа + варн.
              <br />
              Повтор: бан 3 дня.
            </Penalty>
          </RuleItem>

        </RuleBlock>

        {/* VI. Игры */}
        <RuleBlock title="VI. Игровые правила">

          <RuleItem number="6.1">
            <p>
              Тиммерство запрещено.
            </p>

            <Penalty>
              Наказание: отмена игры + каждому тиммеру варн.
              <br />
              Исключение: комиссар нашёл доктора через проверку.
            </Penalty>
          </RuleItem>

          <RuleItem number="6.2">
            <p>
              Игра с твинка запрещена.
            </p>

            <Penalty>
              Наказание: варн.
              <br />
              Повтор: перманентный бан твинка.
              <br />
              Исключение: игра с твинка при СБ, если в игре
              находится только один твинк.
            </Penalty>
          </RuleItem>

        </RuleBlock>

        {/* VII. Дополнительные */}
        <RuleBlock title="VII. Дополнительные правила">

          <RuleItem number="7.1">
            <p>
              Шуточные оскорбления допускаются только в том случае,
              если человек, которого оскорбили, не обижен.
            </p>

            <Penalty>
              Наказание: мут 15 минут.
              <br />
              Повтор: мут 30 минут + варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="7.2">
            <p>
              Ложный репорт запрещён.
            </p>

            <Penalty>
              Наказание: варн.
            </Penalty>
          </RuleItem>

          <RuleItem number="7.3">
            <p>
              Попытка найти уязвимое место в правилах запрещена.
            </p>

            <Penalty>
              Наказание: мут 1 час + варн.
              <br />
              Повтор: бан на 7 дней.
            </Penalty>
          </RuleItem>

        </RuleBlock>

        {/* Конец */}
        <div className="mt-14 border-t border-[#d8c99e] pt-8 sm:mt-16">
          <p className="text-base font-medium text-[#29251d]">
            Незнание правил не освобождает от ответственности.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#625c50]">
            Правила могут дополняться и изменяться в зависимости
            от решения владельца проекта.
          </p>
        </div>

      </div>
    </section>
  );
}


/* Один пункт правила */
function RuleItem({ number, children }) {
  return (
    <div className="border-l-2 border-[#d8c99e] pl-4 sm:pl-5">
      <p className="mb-2 text-sm font-medium text-[#9a7b32]">
        {number}
      </p>

      <div className="space-y-3 leading-7 text-[#625c50]">
        {children}
      </div>
    </div>
  );
}


/* Наказание */
function Penalty({ children }) {
  return (
    <div className="border-l border-[#e8e1d2] pl-4 text-sm leading-6 text-[#625c50]">
      {children}
    </div>
  );
}


/* Раздел правил */
function RuleBlock({ title, children }) {
  return (
    <div className="mt-14 max-w-4xl sm:mt-16">

      <div className="border-b border-[#d8c99e] pb-3">
        <h2 className="text-xl font-semibold text-[#29251d] sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="mt-7 space-y-8">
        {children}
      </div>

    </div>
  );
}

export default RulesSection;