import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";

export const PropertyFeatures = ({
  price,
  has_parking,
  pet_friendly,
  bathrooms,
  bedrooms,
}) => {
  return (
    <div className="max-w-lg p-5 mx-auto my-10 text-center bg-white text-slate-900">
      <div className="grid grid-cols-2 gap-5 mb-4">
        <div>
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
        </div>
        <div>
          {!!pet_friendly && (
            <>
              <FontAwesomeIcon icon={faDog} /> pet friendly
            </>
          )}
        </div>
        <div>
          {!!has_parking && (
            <>
              <FontAwesomeIcon icon={faCar} /> parking available
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-bold">€{numeral(price).format("0,0")}</h3>
    </div>
  );
};
