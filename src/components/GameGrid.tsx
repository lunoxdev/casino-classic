import { type Games } from "./../types";

interface GamesGridProps {
  games: Games[];
  onGamePlay: (url: string) => void;
}

const GameGrid = ({ games, onGamePlay }: GamesGridProps) => {
  if (!games.length) {
    return (
      <span className="col-span-3 sm:col-span-5 my-5">Game not found</span>
    );
  }

  return (
    <section className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-5 my-5 group">
      {games.map((game, index) => {
        return (
          <button
            key={index}
            className="w-full"
            onClick={() => onGamePlay(game.url)}
          >
            <img
              src={game.cover}
              width={384}
              height={505}
              className="rounded-xl mb-2 cursor-pointer group-hover:opacity-50 hover:!opacity-100 hover:scale-105 transition duration-300"
            />
          </button>
        );
      })}
    </section>
  );
};

export default GameGrid;
