import { Place } from "../api/place.type";

interface MapProps {
  place: Place | null;
}

export const Map = ({ place }: MapProps) => {
  return <div>Map</div>;
};
