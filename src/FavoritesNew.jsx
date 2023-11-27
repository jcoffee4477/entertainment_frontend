export function FavoritesNew(props) {
  
  const handleSubmit =  (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.newFavorites(params,() => event.target.reset())
  }


  return (
    <div>
      <h1>New Favorite</h1>
      <form onSubmit={handleSubmit}>
        <div>
          ID: <input name="id" type="text" />
        </div>
        <div>
          Item ID: <input name="item_id" type="text" />
        </div>
        
        
        <button type="submit">Create Item</button>
      </form>
    </div>
  );
}