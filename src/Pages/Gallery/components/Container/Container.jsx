import React, { useState } from "react";
import classes from "./Container.module.css";
import InpageImg from "../../../../components/InpageImg/InpageImg";
import Title from "../../../../components/Title/Title";
import GalleryItem from "../GalleryItem/GalleryItem";
import items from "../GalleryItemData";
import Search from "../Search/Search";

const brands = [
  "Все", "Toyota", "BMW", "Mercedes-Benz", "Audi", "Ford", "Chevrolet", "Volkswagen",
  "Honda", "Nissan", "Hyundai", "Kia", "Subaru", "Porsche", "Mazda", "Lexus",
  "Volvo", "Jaguar", "Land Rover", "Tesla", "Ferrari", "Lamborghini", "Bentley",
  "Rolls-Royce", "Bugatti", "McLaren", "Peugeot", "Renault", "Fiat", "Suzuki",
  "Mitsubishi", "RAM", "Dodge", "Opel", "Lotus", "Skoda", "Genesis", "Alfa Romeo", 
	"Aston Martin", "Hummer", "Infiniti", "Cadillac", "Chery", "Maserati", "Seat", "Tank"
].sort((a, b) => (a === "Все" ? -1 : a.localeCompare(b)));

function Container() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Все");
  const itemsPerPage = 10;

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrand === "Все"
      ? true
      : item.text.toLowerCase().includes(selectedBrand.toLowerCase());
    return matchesSearch && matchesBrand;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  return (
    <div className={classes.gallery__container}>
      <InpageImg bg={require("../../img/BentleyBG.webp")} />
      <Title
        title="Наши"
        subtitle="Работы"
        className={classes.gallery__title}
      />
      <div className={classes.gallery__container__gray}>
        <ul className={classes.brand__list}>
          {brands.map((brand, index) => (
            <li
              key={index}
              onClick={() => handleBrandClick(brand)}
              className={selectedBrand === brand ? classes.activeBrand : ""}
            >
              {brand}
            </li>
          ))}
        </ul>
        <Search onSearchChange={handleSearchChange} />

        {currentItems.map((item, index) => (
          <GalleryItem key={index} imgSrc={item.img} text={item.text} />
        ))}
        <div className={classes.pagination}>
          {currentPage > 1 && (
            <span
              onClick={() => handlePageChange(currentPage - 1)}
              className={classes.arrow}
            >
              ←
            </span>
          )}

          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={currentPage === index + 1 ? classes.active : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </span>
          ))}

          {currentPage < totalPages && (
            <span
              onClick={() => handlePageChange(currentPage + 1)}
              className={classes.arrow}
            >
              →
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Container;
