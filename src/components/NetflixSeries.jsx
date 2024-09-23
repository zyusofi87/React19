import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul >
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;