import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import { getAllStarShips } from "../services/sw-api"

const Starships = () => {
  const [starShips, setStarships] = useState([])

  useEffect(() => {
    const fetchStarShips = async () => {
      const shipData = await getAllStarShips()
      setStarships(shipData.results)
    }
    fetchStarShips()
  }, [])
console.log(starShips)
  return (
    <>
      <h1>This is the starships</h1>
      {starShips.length ? (
        starShips.map((ship, idx) => (
          
          <div  key={idx}>
            <Link  to={"/ship-card"} state={{ ship }}>
              {ship.name}
            </Link>
          </div>
          
        ))
      ) : (
        <>
          <h4>Starships are landing soon</h4>
        </>
      )}
      
    </>

  )
}

export default Starships
