import "./Netflix.css";

export const SeriesCard = ({ data }) => {
  const { name, img_url, rating, cast, genre, description } = data;

  let colorForRating = "default";
  if (rating > 8) {
    colorForRating = "good";
  } else if (rating > 5) {
    colorForRating = "bad";
  } else {  
    colorForRating = "default";
  }
 
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
       
          <h3 >Rating: <span className={"rating_"+colorForRating}>{rating}</span> </h3>
        
        
        <p className="text-3xl font-bold underline">
          Summary: {description}
        </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")}</p>
        <a href="#" target="_blank" rel="noreferrer">
        <button >  Watch Now</button>
        </a>
      </div>
    </li>
  );
};