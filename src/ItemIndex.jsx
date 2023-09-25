export function ItemIndex(props) {
  return (
    <div>
      <h1>All items</h1>
       {props.items.map((item) => (
         <div key={item.id}>
           <h2>{item.name}</h2>
           <img className="item" src={item.image_url} style={{height:100, width:100}}/>
           <p>Description: {item.description}</p>
           <p>Category: {item.category}</p>
           <button onClick={() => props.onItemShow(item)}>More Info</button>
         </div>
      ))}
    </div>
  );
}