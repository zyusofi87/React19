export const SeriesCard = ({data}) => {
  const { name, img_url, rating, cast, genre, description } = data;

  return (
    <li  className="card">
      <div >
        <img
          src={img_url}
          alt={name}
           
          />
        </div>

      <div className="card-content">
        <h2>Name: {name} </h2>
        <h3>Rating: {rating} </h3>
        <p >
          Summary: {description}
        </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")}</p>
        <a href="#" target="_blank" rel="noreferrer">
        <button>  Watch Now</button>
        </a>
      </div>
    </li>
  );
};