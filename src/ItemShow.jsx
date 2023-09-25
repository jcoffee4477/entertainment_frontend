export function ItemShow(props) {

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onUpdateItem(props.item.id, params, () => event.target.reset());
};

  return (
    <div>
    <h1>Item Info</h1>
    <p>name: {props.item.name}</p>
    <p>image_url: {props.item.image_url}</p>
    <p>description: {props.item.description}</p>
    <p>category: {props.item.category}</p>
    <form onSubmit={handleSubmit}>
      <div>
        name: <input defaultValue={props.item.name} name="name" type="text"/>
        image_url: <input defaultValue={props.item.image_url} name="image_url" type="text" />
        description: <input defaultValue={props.item.description} name="description" type="text" />
        category: <input defaultValue={props.item.category} name="category" type="text" />
      </div>
      <button type="submit">Update Item</button>
    </form>
    </div>
  );
}