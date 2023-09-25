import {ItemIndex} from "./ItemIndex"
import {useState, useEffect} from "react"
import axios from "axios"
import {ItemNew} from "./ItemNew"
import {Modal} from "./Modal"
import {ItemShow} from "./ItemShow"

export function Content() {

  const [items, setItems] = useState([]);
  const [isItemShowVisible, setIsItemShowVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({})

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

  const handleItemShow = (item) => {
    console.log("showItem", item);
    setIsItemShowVisible(true);
    setCurrentItem(item)
  }

  const handleClose = () => {
    console.log("handle close");
    setIsItemShowVisible(false)
  }
    
   useEffect(handleItemIndex, []) 
  

  return (
    <div>
      <h1>Welcome to React!</h1>
      <ItemNew onCreateItem={handleCreateItem}/>
      <ItemIndex items={items} onItemShow={handleItemShow} />
      <Modal show={isItemShowVisible} onClose={handleClose}>
        <ItemShow item={currentItem} />
      </Modal>
    </div>
  )
}