import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

export function FavoritesShow() {

  const params = useParams();
  const [favorites, setFavorites] = useState([])

  const handleFavoritesShow = () => {
    console.log("handle favs")
    axios.get(`http://localhost:3000/favorites/${params.id}`).then(response => {
      console.log(response.data)
      setFavorites(response.data)
    })
  }

  useEffect(handleFavoritesShow, [])
  

  return (
    <div>
      <p>helllllo</p>
    </div>
  )
}