import { useLocation } from "react-router";

const GamePlay = () => {
  const location = useLocation();
  const gameUrl = location.state?.gameUrl;

  return (
    <div className="fixed inset-0 h-screen">
      <iframe src={gameUrl} allowFullScreen className="w-full h-full" />
    </div>
  );
};

export default GamePlay;
