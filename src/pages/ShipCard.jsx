import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../services/sw-api"

const ShipCard = () => {
  const [shipDetails, setShipDetails] = useState({})

  const location = useLocation()
  console.log(location.state.ship.url)
  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.ship.url)
      setShipDetails(shipData)
    }

    fetchDetails()
  }, [location.state.ship.url])

  return <>
  <div>{shipDetails.name}</div>
  {shipDetails.model}</>
}

export default ShipCard
