import { Input } from "components/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch({
      petFriendly,
      hasParking,
      minPrice,
      maxPrice,
    });
  };

  useEffect(() => {
    const {
      petFriendly: petFriendlyInit,
      hasParking: hasParkingInit,
      minPrice: minPriceInit,
      maxPrice: maxPriceInit,
    } = queryString.parse(window.location.search);

    setPetFriendly(petFriendlyInit === "true");
    setHasParking(hasParkingInit === "true");
    setMinPrice(minPriceInit || "");
    setMaxPrice(maxPriceInit || "");
  }, []);

  return (
    <div className="flex max-w-5xl gap-5 p-5 mx-auto my-5 border-2 border-solid rounded-md border-slate-400">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={() => setHasParking((value) => !value)}
            />
            <span className="pl-2">has parking</span>
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={() => setPetFriendly((value) => !value)}
            />
            <span className="pl-2">pet friendly</span>
          </label>
        </div>
      </div>
      <div className="flex-1">
        <span>Min price</span>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <span>Max price</span>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="button" onClick={handleSearch}>
        Search
      </div>
    </div>
  );
};
