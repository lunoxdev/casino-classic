import { type Games } from "./../types";

interface GamesGridProps {
  games: Games[];
  onGamePlay: (url: string) => void;
}

const Carousel = ({ games, onGamePlay }: GamesGridProps) => {
  return (
    <section className="flex relative overflow-hidden my-6 sm:my-8">
      <div className="flex flex-row shrink-0 space-x-4 animate-carousel hover:pause-animation my-2">
        {games.map((game, index) => {
          return (
            <img
              onClick={() => onGamePlay(game.url)}
              key={index}
              src={game.cover}
              width={134}
              height={205}
              className="w-20 sm:w-32 rounded-sm cursor-pointer group-hover:opacity-50 hover:!opacity-100 hover:scale-105 transition duration-300"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
