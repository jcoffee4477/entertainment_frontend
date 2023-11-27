export function ItemIndex(props) {

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params,() => event.target.reset())
  }

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

           <button onClick={handleSubmit}>Add to favorites</button>
         </div>
      ))}
    </div>
  );
}