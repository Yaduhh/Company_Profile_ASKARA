import { FaSearch } from "react-icons/fa";
import { TbMoodSearch } from "react-icons/tb";
import { useState } from "react";

const CategorySelection = ({
  onSelectCategory,
  activeCategory,
  setResults,
  setSearchInput,
}) => {
  const categories = ["Teknologi", "Tutorial", "Curhatan", "Apps", "Tech"];
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:8081/articles")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((articles) => {
          return (
            value &&
            articles &&
            articles.title &&
            articles.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    setSearchInput(value);
  };

  return (
    <>
      <div className="mb-8 lg:space-x-10 w-full justify-between flex flex-wrap-reverse items-center gap-4 md:gap-3 border-b-2 py-3 md:py-5 text-primary font-semibold font-primary">
        <div className="space-x-5 md:space-x-16 ml-0 md:ml-12">
          <button
            onClick={() => onSelectCategory(null)}
            className={` ${
              activeCategory ? "text-primary/50 " : "active-button"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              onClick={() => onSelectCategory(category)}
              key={category}
              className={` ${
                activeCategory === category
                  ? "active-button"
                  : "text-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <form className="w-full md:w-auto">
          <div className="w-full flex items-center gap-2">
            <div className="w-full relative z-0 flex items-center">
              <input
                onChange={(e) => handleChange(e.target.value)}
                value={input}
                type="text"
                id="search"
                placeholder="Jangan cari yang gada"
                className="pr-5 pl-12 py-2 rounded-3xl border border-primary text-sm font-light w-full capitalize italic"
              />
              <TbMoodSearch
                className="absolute left-3 text-primary/50"
                size={20}
              />
              <div className="w-[2px] h-[50%] bg-primary/50 absolute z-0 rounded-full left-9"></div>
            </div>
            <button className="bg-primary text-white p-3 rounded-full">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategorySelection;
