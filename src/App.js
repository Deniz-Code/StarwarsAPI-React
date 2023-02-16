
import "./App.css"
import Header from "./Header"
import { Route, Routes } from "react-router-dom"
import Starships from "./components/Starships"
import ShipCard from "./pages/ShipCard"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Starships />} />
        <Route path="/ship-card" element={<ShipCard/>}/>
      </Routes>
    </>
  )
}

export default App
