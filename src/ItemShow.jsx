import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

export function ItemShow(props) {

  
  const [item, setItem] = useState({})
  const params = useParams()
  

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdateItem(props.item.id, params, () => event.target.reset());
};

const handleClick = () => {
  props.onDestroyItem(props.item)
}

const handleItemShow = () => {
  console.log('handle show item')
  console.log('params', props)
  axios.get(`http://localhost:3000/items/${props.item.id}.json`).then(response => {
    console.log(response)
    
    setItem(response.data)
  })
  console.log(item)
} 
const handleAddToFavorites = () => {
  console.log('add to favorites')
  axios.post("http://localhost:3000/favorites.json", { item_id:item.id}).then(response => {
    console.log(response.data)
    setItem(item)
    console.log(item)
  })
}

useEffect(handleItemShow, [])

  return (
    <div>
    
    <form onSubmit={handleSubmit}>
      <div>
        name: <input defaultValue={props.item.name} name="name" type="text"/>
        image_url: <input defaultValue={props.item.image_url} name="image_url" type="text" />
        description: <input defaultValue={props.item.description} name="description" type="text" />
        category: <input defaultValue={props.item.category} name="category" type="text" />
      </div>
      <button type="submit">Update Item</button>
    </form>
    <button onClick={handleClick}>Destroy Item</button>
    <button onClick={handleAddToFavorites}>Add to favorites</button>
    </div>
  );
}