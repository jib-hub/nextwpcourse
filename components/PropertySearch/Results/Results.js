import { PropertyCard } from "./PropertyCard";

export const Results = ({ properties }) => {
  console.log("properties", properties);
  return (
    <div className="grid max-w-5xl grid-cols-3 gap-5 mx-auto mb-10">
      {properties.map((property) => (
        <PropertyCard key={property.databaseId} property={property} />
      ))}
    </div>
  );
};
