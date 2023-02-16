
import "./App.css"
import Header from "./Header"
import { Route, Routes } from "react-router-dom"
import Starships from "./components/Starships"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Starships />} />
      </Routes>
    </>
  )
}

export default App
