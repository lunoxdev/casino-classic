const GithubCard = () => {
  return (
    <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10">
      <a
        href="https://github.com/lunoxdev"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-900/40 via-black/60 to-black/80 shadow-2xl hover:shadow-emerald-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-emerald-400/60 overflow-hidden"
      >
        {/* Bright effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {/* Glow internal */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-400/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex items-center gap-4">
          {/* Icon */}
          <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-600/10 backdrop-blur-sm group-hover:from-emerald-400/40 group-hover:to-emerald-500/20 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-7 h-7 fill-current text-emerald-400
              group-hover:text-emerald-300 transition-all duration-300
              group-hover:scale-110 drop-shadow-lg"
            >
              <g fill="none">
                <g clipPath="url(#IconifyId198e3d74bc9d07cb3)">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="IconifyId198e3d74bc9d07cb3">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-left">
            <p className="text-emerald-400 font-bold text-lg group-hover:text-emerald-300 transition-colors duration-300 drop-shadow-sm">
              GitHub
            </p>
            <p className="text-emerald-300/60 text-sm group-hover:text-emerald-200/80 transition-colors duration-300">
              Portfolio
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubCard;
