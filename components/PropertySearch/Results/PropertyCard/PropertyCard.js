import {
  faBathtub,
  faBed,
  faCar,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export const PropertyCard = ({ property }) => {
  console.log(
    "property.featuredImage.node.uri",
    property.featuredImage.node.uri
  );
  return (
    <Link
      href={property.uri}
      className="block p-5 border-2 border-slate-300 bg-slate-100 hover:bg-slate-200"
    >
      <div className="flex w-full">
        <Image
          src={property.featuredImage.node.sourceUrl}
          width={300}
          height={200}
          alt={property.title}
          className="object-cover w-[300px] h-[200px]"
        />
      </div>
      <div className="mt-3 text-lg font-bold">{property.title}</div>
      <div className="mt-3">
        €{numeral(property.propertyFeatures.price).format("0,0")}
      </div>
      <div className="flex justify-between mt-3 text-sm">
        <div>
          <FontAwesomeIcon icon={faBathtub} />
          <span className="pl-2">
            {property.propertyFeatures.bathrooms} bathrooms
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBed} />
          <span className="pl-2">
            {property.propertyFeatures.bedrooms} bedrooms
          </span>
        </div>
      </div>
      {(!!property.propertyFeatures.hasParking ||
        !!property.propertyFeatures.petFriendly) && (
        <div className="flex justify-between mt-3 text-sm">
          {!!property.propertyFeatures.hasParking && (
            <div>
              <FontAwesomeIcon icon={faCar} />
              <span className="pl-2">parking available</span>
            </div>
          )}
          {!!property.propertyFeatures.petFriendly && (
            <div>
              <FontAwesomeIcon icon={faDog} />
              <span className="pl-2">pet friendly</span>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};
