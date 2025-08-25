import { useState, type ChangeEvent } from "react";
import { gamesData } from "./data/data";
import { type Games } from "./types";
import { useNavigate } from "react-router";
import GameGrid from "./components/GameGrid";
import HeaderBar from "./components/HeaderBar";
import Background from "./components/Background";
import Carousel from "./components/Carousel";
import Muzan from "./assets/muzan.webp";

function App() {
  const [games, setGames] = useState<Games[]>(gamesData);
  const [resetFilter, setResetFilter] = useState<string>("");
  const navigate = useNavigate();

  const handleResetFilter = () => {
    setGames(gamesData);
    setResetFilter("");
  };

  const handleGamesFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const gamesFiltered = gamesData.filter((game) =>
      game.name.toLowerCase().includes(searchTerm)
    );
    setGames(gamesFiltered);
    setResetFilter(searchTerm);
  };

  const handleGamePlay = (url: string) => {
    navigate("/gameplay", { state: { gameUrl: url } });
  };

  return (
    <div className="mx-auto w-full sm:w-7xl flex">
      <Background />
      <aside className="hidden lg:block w-60 bg-green-800/50 rounded-xl p-4 mr-6">
        <h1 className="animatimate-text-gradient text-5xl font-bold">CASINO</h1>
      </aside>
      <div className="flex-1">
        <header>
          {/* Hero */}
          <section className="flex my-0 sm:my-6">
            <div className="relative h-auto w-24 md:w-28 overflow-hidden rounded-xl p-1.5 border border-gray-800 mr-4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d4f1c_0%,#2dd138_50%,#0d4f1c_100%)]" />
              <img
                className="relative w-full h-full rounded-sm object-cover"
                src={Muzan}
                alt="Avatar"
                loading="eager"
              />
            </div>
            <div className="flex flex-col text-start">
              <span className="text-lg font-semibold">Muzan Kibutsuji</span>
              <span className="animatimate-text-gradient text-2xl font-bold">
                $1000
              </span>
            </div>
          </section>

          <Carousel games={gamesData} onGamePlay={handleGamePlay} />

          <HeaderBar
            resetFilter={resetFilter}
            handleGamesFilter={handleGamesFilter}
            handleResetFilter={handleResetFilter}
            showResetButton={!games.length}
          />
        </header>
        <main>
          <GameGrid games={games} onGamePlay={handleGamePlay} />
        </main>
      </div>
    </div>
  );
}

export default App;
