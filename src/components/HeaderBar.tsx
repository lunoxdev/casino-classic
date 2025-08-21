import type { ChangeEvent } from "react";

interface HeaderBarProps {
  resetFilter: string;
  handleGamesFilter: (e: ChangeEvent<HTMLInputElement>) => void;
  handleResetFilter: () => void;
  showResetButton: boolean;
}

const HeaderBar = ({
  resetFilter,
  handleGamesFilter,
  handleResetFilter,
  showResetButton,
}: HeaderBarProps) => {
  return (
    <section className="relative flex justify-end items-center">
      <input
        type="text"
        placeholder="Search Game"
        value={resetFilter}
        onChange={handleGamesFilter}
        className="text-center bg-black/20 outline-none focus:border focus:border-[#00ff41] rounded-lg px-2 sm:px-4 py-1 sm:py-2 transition duration-300"
      />
      {showResetButton && (
        <button
          onClick={handleResetFilter}
          className="text-sm sm:text-base font-bold absolute right-7 cursor-pointer hover:text-[#00ff41]"
        >
          X
        </button>
      )}
    </section>
  );
};

export default HeaderBar;
