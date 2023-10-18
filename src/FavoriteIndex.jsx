export function FavoriteIndex(props) {
  return (
    <div>
      <h1>My Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <p>Name: {favorite.item.name} </p>
        </div>
     ))}
    </div>
  );
}