import { useState } from "react";

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
  const [count, setCount] = useState(0);
  // const [speed, setSpeed] = useState<number>(1);
  useEffect(() => {
    // window.game.setSpeedModifier(100, window.game.getMyPlayer().id);
    console.log("test------------------");
  }, []);
  return (
    <div className="w-44 h-44">
      <div>
        <h1 className="font-bold">Gather</h1>
        <h1>Github</h1>
      </div>
      <h3>SPEED</h3>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
