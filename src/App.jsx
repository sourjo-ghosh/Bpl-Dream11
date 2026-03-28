import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Players from './Components/Players/Players.jsx';
import AvailableSection from './Components/AvailableSection/AvailableSection.jsx';
import Skeleton from './Components/Skeleton/Skeleton.jsx';

const fetchPlayers = async () =>{
    const res = await fetch("/data.json")
    return res.json();
}
function App() {
  const [coin, setCoin] = useState(100)
  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <AvailableSection></AvailableSection>
      <Suspense fallback=
      {<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6).fill(0).map((_, i) => <Skeleton key={i} />)}
      </div> }>
      <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
    </>
  )
}

export default App
