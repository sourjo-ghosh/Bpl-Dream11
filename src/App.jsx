import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/HomePage/Banner/Banner.jsx";
import Navbar from "./Components/HomePage/Navbar/Navbar.jsx";
import Players from "./Components/HomePage/Players/Players.jsx";
import Skeleton from "./Components/Skeleton/Skeleton.jsx";
const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const PlayersPromise = fetchPlayers();
  const [Coin, setCoin] = useState(5000000);
  return (
    <>
      <Navbar Coin={Coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} />
              ))}
          </div>
        }
      >
        <Players
          PlayersPromise={PlayersPromise}
          Coin={Coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
