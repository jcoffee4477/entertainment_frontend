import axios from "axios"
import {useEffect, useState} from "react"
export function ItemIndex(props) {

 /* const [endPoint, setEndPoints] = useState('')
  const [container, setContainer] = useState([])
  const [finalPoint, setFinalPoint] = useState('')
  
  useEffect(() => {
    
  }, [finalPoint])


  const fetchMe = () => {
 
    if (endPoint) {

  fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${endPoint}?exact=true&titleType=movie`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8dff404ea7msh819937829f27d01p13d9bdjsne7d5cafd9b20',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'}
  
  })
  .then(response => {
    
    return response.json()
  })
  .then(data => {
    setContainer(data.results)
    console.log("helllllo", data.results)
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
  } */
  

  

  

  return (
    <div>
      <h1>All Items</h1>

      

      

      
      
     


       {props.items.map((item) => (
         <div key={item.id}>
           <h2>{item.name}</h2>
           <a href={`/items/${item.id}`}/>
           <img className="item" src={item.image_url} style={{height:100, width:100}}/>
           <p>Description: {item.description}</p>
           <p>Category: {item.category}</p>

           <button onClick={() => props.onItemShow(item)}>More Info</button>

           
         </div>

        

      ))}
    </div>
  );
}



/* const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params,() => event.target.reset())
  }}*/