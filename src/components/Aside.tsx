import pokerBanner from "../assets/banners/poker-banner.webp";
import casinoBanner from "../assets/banners/casino-banner.webp";
import tournamentBanner from "../assets/banners/tournament-banner.webp";

const Aside = () => {
  return (
    <aside className="hidden lg:block w-60 bg-green-800/50 space-y-5 rounded-xl p-4 mr-6">
      <h1 className="animatimate-text-gradient bg-gradient-to-r from-[#0d4f1c] via-[#2dd138] via-50% to-[#0d4f1c] text-4xl font-extrabold">
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

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 shrink-0 items-start mt-5 text-lg">
        <section className="flex flex-col items-start space-y-5 w-full">
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
        </section>
      </nav>

      {/* Promo banners */}
      <section className="mt-10 mb-7 space-y-7">
        <img
          src={pokerBanner}
          alt="Poker Banner"
          loading="eager"
          className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer"
        />
        <img
          src={casinoBanner}
          alt="Casino Banner"
          loading="eager"
          className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer mt-4"
        />
        <img
          src={tournamentBanner}
          alt="Tournament Banner"
          loading="eager"
          className="rounded-md w-full shadow-green-300 shadow-lg hover:animate-pulse hover:scale-105 hover:transition-transform duration-300 cursor-pointer mt-4"
        />
      </section>
    </aside>
  );
};

export default Aside;
