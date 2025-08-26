import { useState } from "react";
import pokerBanner from "../assets/banners/poker-banner.webp";
import casinoBanner from "../assets/banners/casino-banner.webp";
import tournamentBanner from "../assets/banners/tournament-banner.webp";
import GithubCard from "./GithubCard";

const Aside = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Hamburger button only visible in mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-2 right-4 z-50 text-green-500 text-4xl"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Dark verlay in mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-green-800/90 space-y-5 p-4 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:h-auto lg:w-60 lg:bg-green-800/50 lg:rounded-xl lg:mr-6
        `}
      >
        <h1 className="divider-line animatimate-text-gradient bg-gradient-to-r from-[#179133] via-[#32ee3f] to-[#179133] text-4xl font-extrabold">
          CASINO
        </h1>

        <section className="grid grid-cols-2 gap-2 mt-8">
          <button className="py-4 rounded-md bg-gradient-to-bl from-[#2dd138] shadow-[#0f5a20] shadow-xs to-transparent font-bold text-sm cursor-pointer">
            🎰 CASINO
          </button>
          <button className="py-4 rounded-md bg-gradient-to-bl from-[#2dd138] shadow-[#0f5a20] opacity-60 shadow-xs to-transparent font-bold text-sm cursor-not-allowed">
            🏟️ SPORTS
          </button>
        </section>

        <nav className="flex flex-col space-y-5 shrink-0 items-start mt-5 text-lg">
          <a
            href="#"
            className="bg-gradient-to-l from-[#2dd138] to-transparent px-4 py-2 rounded-md font-bold w-full text-start cursor-pointer"
          >
            🎯 Picks for you
          </a>
          <a href="#" className="cursor-not-allowed">
            ⭐️ Favorites
          </a>
          <a href="#" className="cursor-not-allowed">
            🕓 Recents
          </a>
        </nav>

        <div className="divider-line animate-pulse" />

        <section className="space-y-4 sm:space-y-7">
          <img
            src={pokerBanner}
            alt="Poker Banner"
            className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer"
          />
          <img
            src={casinoBanner}
            alt="Casino Banner"
            className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer mt-4"
          />
          <img
            src={tournamentBanner}
            alt="Tournament Banner"
            className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer mt-4"
          />
        </section>

        <div className="divider-line animate-pulse" />

        <GithubCard />
      </aside>
    </>
  );
};

export default Aside;
