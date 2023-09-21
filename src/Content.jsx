import {ItemIndex} from "./ItemIndex"
import {useState, useEffect} from "react"
import axios from "axios"
import {ItemNew} from "./ItemNew"

export function Content() {

  const [items, setItems] = useState([]);

  const handleItemIndex = () => {
    console.log("handleitems");
    axios.get("http://localhost:3000/items.json").then((response => {
      console.log(response.data);
      setItems(response.data)
    }))
  }

  const handleCreateItem = (params, successCallback) => {
    console.log("handleCreateItem", params);
    axios.post("http://localhost:3000/items.json", params).then((reponse => {
      setItems([...items, reponse.data])
    }))
  }
    
   useEffect(handleItemIndex, []) 
  

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ItemIndex items={items} />
      <ItemNew onCreateItem={handleCreateItem}/>
    </div>
  )
}