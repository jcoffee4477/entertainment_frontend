import {useEffect, useState} from "react"
import axios from "axios"

export function MovieIndex() {

/*const [movies, setMovies] = useState([])

const getMovieData = () => {
  console.log("DATADATA")
  axios.get("https://api.themoviedb.org/3/search/movie?query=inception&api_key=b7af066e1732394316aee5bdb24b8182").then(response => {
  console.log(response.data.results)
  setMovies(response.data.results)
  })
}





useEffect(getMovieData, [])*/


const [endPoint, setEndPoints] = useState('')
const [container, setContainer] = useState([])
const [finalPoint, setFinalPoint] = useState('')

useEffect(() => {
  
}, [finalPoint])


const fetchMe = () => {

  if (endPoint) {

    axios.get(`https://api.themoviedb.org/3/search/movie?query=${endPoint}&api_key=b7af066e1732394316aee5bdb24b8182`)
.then(response => {
  setContainer(response.data.results)
  console.log("helllllo", response.data.results)
})
.catch(err => {
  console.error(err);
});

}
}

const onChangeHandler = (e) => {
  setEndPoints(e.target.value)
}

const submitHandler = (e) => {
  e.preventDefault()
  setFinalPoint(endPoint)
}





  return (
    <div>
      <h1>Hellllllo</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />

        <button onClick={fetchMe}>submit</button> 
      </form>

      {container.map(movie => (
        <div>
          <p>{movie.title}</p>
        </div>
      ))}
       
    </div>
  )
}