import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero min-h-screen overflow-hidden bg-[#faf7ef]">
      <div className="hero-content w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row-reverse lg:justify-between lg:gap-16 lg:py-24">

        {/* Картинка */}
        <div className="order-2 w-full max-w-md lg:order-1">
          <img
            src="/logo.jpg"
            alt="Vanilla RP"
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>

        {/* Текст */}
        <div className="order-1 max-w-xl lg:order-2">

          <p className="text-sm font-medium text-[#9a7b32]">
            VANILLA RP
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#29251d] sm:text-4xl md:text-5xl">
            Добро пожаловать в Vanilla RP
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-[#625c50] sm:text-base sm:leading-7">
            Ролевой проект, в котором каждый может создать
            свою историю и стать частью нашего сообщества.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#625c50]">
            <span>1000+ подписчиков</span>
            <span>Telegram-сообщество</span>
          </div>

          <div className="mt-7 flex flex-col gap-3 xs:flex-row sm:flex-row">

            <a
              href="https://t.me/VAN1LLAPROJECTT"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#e8d9a8] px-5 py-2.5 text-center text-sm font-medium text-[#4b4027] transition-colors hover:bg-[#ddcc96]"
            >
              Перейти в Telegram
            </a>

            <Link
              to="/about"
              className="rounded-lg border border-[#d8c99e] px-5 py-2.5 text-center text-sm font-medium text-[#625c50] transition-colors hover:text-[#9a7b32]"
            >
              О проекте
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;