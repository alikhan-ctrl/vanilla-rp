import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-[#e8e1d2] bg-[#faf7ef]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Логотип */}
        <Link
          to="/"
          className="shrink-0 text-lg font-bold tracking-wide text-[#29251d] sm:text-xl"
        >
          VANILLA RP
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden items-center gap-7 text-sm text-[#625c50] lg:flex">
          <Link
            to="/about"
            className="transition-colors hover:text-[#9a7b32]"
          >
            О проекте
          </Link>

          <Link
            to="/rules"
            className="transition-colors hover:text-[#9a7b32]"
          >
            Правила
          </Link>

          <Link
            to="/advertising"
            className="transition-colors hover:text-[#9a7b32]"
          >
            Реклама
          </Link>

          <Link
            to="/contacts"
            className="transition-colors hover:text-[#9a7b32]"
          >
            Контакты
          </Link>

          <Link
            to="/support"
            className="transition-colors hover:text-[#9a7b32]"
          >
            Поддержка
          </Link>
        </nav>

        {/* Telegram */}
        <a
          href="https://t.me/VAN1LLAPROJECTT"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 text-sm font-medium text-[#9a7b32] transition-colors hover:text-[#725b25] lg:block"
        >
          Telegram
        </a>

        {/* Мобильное меню */}
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-lg border border-[#d8c99e] px-3 py-2 text-[#625c50]">
            ☰
          </summary>

          <ul className="menu dropdown-content z-50 mt-3 w-56 rounded-xl border border-[#e8e1d2] bg-[#faf7ef] p-2 shadow-lg">

            <li>
              <Link to="/about">О проекте</Link>
            </li>

            <li>
              <Link to="/rules">Правила</Link>
            </li>

            <li>
              <Link to="/advertising">Реклама</Link>
            </li>

            <li>
              <Link to="/contacts">Контакты</Link>
            </li>

            <li>
              <Link to="/support">Поддержка</Link>
            </li>

            <li>
              <a
                href="https://t.me/VAN1LLAPROJECTT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>

          </ul>
        </details>

      </div>
    </header>
  );
}

export default Header;