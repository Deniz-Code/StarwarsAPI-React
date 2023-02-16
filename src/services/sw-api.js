const baseUrl = "https://swapi.dev"

export async function getAllStarShips() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getDetails(shipUrl) {
  const res = await fetch(`${shipUrl}`)
  return res.json()
}
