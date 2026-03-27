import { Suspense } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner.jsx';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Players from './Components/Players/Players.jsx';

const fetchPlayers = async () =>{
    const res = await fetch("/data.json")
    return res.json();
}
function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-2xl"></span>}>
      <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
