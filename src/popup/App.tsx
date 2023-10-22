// import { useState } from "react";

import { useEffect } from "react";

declare global {
  interface Window {
    game: {
      setSpeedModifier: (speed: number, id: string) => undefined;
      getMyPlayer: () => { id: string };
    };
  }
}

export default function App() {
  // const [speed, setSpeed] = useState<number>(1);
  useEffect(() => {
    window.game.setSpeedModifier(100, window.game.getMyPlayer().id);
  }, []);
  return (
    <div className="w-44 h-44">
      <div>
        <h1 className="font-bold">Gather</h1>
        <h1>Github</h1>
      </div>
      <h3>SPEED</h3>
    </div>
  );
}
