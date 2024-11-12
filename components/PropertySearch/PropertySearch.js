"use client";
import { useEffect, useState } from "react";
import { Results } from "./Results";
import { Pagination } from "./Pagination";
import { useRouter, usePathname } from "next/navigation";
import queryString from "query-string";
import { Filters } from "./Filters";

export const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 3;
  const router = useRouter();
  const pathName = usePathname();

  const search = async () => {
    const { page, petFriendly, hasParking, minPrice, maxPrice } =
      queryString.parse(window.location.search);
    const filters = {};
    if (minPrice) {
      filters.minPrice = parseInt(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice);
    }
    if (petFriendly === "true") {
      filters.petFriendly = true;
    }
    if (hasParking === "true") {
      filters.hasParking = true;
    }
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        page: parseInt(page || "1"),
        ...filters,
      }),
    });
    const data = await response.json();
    console.log("search data", data);
    setProperties(data.properties);
    setTotal(data.total);
  };

  const handlePageClick = (page) => {
    const { petFriendly, hasParking, minPrice, maxPrice } = queryString.parse(
      window.location.search
    );
    router.push(
      `${pathName}?page=${page}&petFriendly=${
        petFriendly === "true"
      }&hasParking=${
        hasParking === "true"
      }&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = ({ petFriendly, hasParking, minPrice, maxPrice }) => {
    router.push(
      `${pathName}?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
  };
  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        total={Math.ceil(total / pageSize)}
      />
    </div>
  );
};
