import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

export function FavoritesShow(props) {

  const handleClick = () => {
    props.onDestroyFavorite(props.favorites)
  }

  const redirectToFavoritesIndex = () => {
    window.location.href = "/favorites"
  }

  const myFunction = () => {
    handleClick();
    redirectToFavoritesIndex()
  }
  return (
    <div>
      
      <p>helllllo</p>
      <button onClick={myFunction} >Remove from favorites</button>
      
    </div>
  )
}