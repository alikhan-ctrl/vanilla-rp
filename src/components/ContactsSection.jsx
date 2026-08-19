import React from 'react'

function ContactsSection() {
  return (
    <section className="min-h-screen bg-[#faf7ef]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-[#9a7b32]">
            Контакты
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#29251d] sm:text-4xl md:text-5xl">
            Связаться с нами
          </h1>

          <p className="mt-5 text-base leading-7 text-[#625c50]">
            По вопросам проекта, рекламы и сотрудничества
            обращайтесь к нужному человеку.
          </p>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-[#e8e1d2] border-y border-[#e8e1d2] sm:mt-14">

          {[
            ["Владелец Telegram-канала", "@esh1lii", "https://t.me/esh1lii"],
            ["Менеджер", "@perfect_norhings", "https://t.me/perfect_norhings"],
            ["Создатель сайта", "@bibr375", "https://t.me/bibr375"],
          ].map(([role, username, link]) => (
            <a
              key={username}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-sm text-[#9a7b32]">
                  {role}
                </p>

                <p className="mt-1 break-all text-lg font-medium text-[#29251d]">
                  {username}
                </p>
              </div>

              <span className="text-sm text-[#625c50] transition-colors group-hover:text-[#9a7b32]">
                Написать →
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactsSection;