export function ItemShow(props) {
  return (
    <div>
    <h1>Item Info</h1>
    <p>Name: {props.item.name}</p>
    <p>Image_url: {props.item.image_url}</p>
    <p>Description: {props.item.description}</p>
    <p>Category: {props.item.category}</p>
    </div>
  );
}