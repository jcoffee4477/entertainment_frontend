export function FavoriteIndex(props) {
  console.log('props',props)
  return (
    <div>
      <h1>My Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <p>name: {favorite.item.name} </p>
          
          
        </div>
     ))}
    </div>
  );
}