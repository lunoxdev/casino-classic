import { useState, type ChangeEvent } from "react";
import { gamesData } from "./data/data";
import { type Games } from "./types";
import { useNavigate } from "react-router";
import GameGrid from "./components/GameGrid";
import HeaderBar from "./components/HeaderBar";

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
    <div className="mx-auto w-full sm:w-7xl">
      <header>
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
  );
}

export default App;
