export const SeriesCard = ({data}) => {
const { name, img_url,rating, cast, genre,description} = data;
  return (
    <li >
      <div >
        <img
          src={img_url}
          alt={name}
           width="40%" height="40%"
          />
        </div>

        <h2>Name: {name} </h2>
        <h3>Rating: {rating} </h3>
        <p >
          Summary: {description}
        </p>
        <p>Genre: {genre} </p>
        <p>Cast: {cast}</p>
        <a href="#" target="_blank" rel="noreferrer">
        <button>  Watch Now</button>
        </a>
    </li>
  );
};