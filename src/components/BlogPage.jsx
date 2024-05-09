import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import Ads from "./Ads";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:8081/articles?Page=${currentPage}&limit=${pageSize}`;

      // filter by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      // Filter by search query
      if (searchInput) {
        url += `&search=${searchInput}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory, searchInput]);

  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
    setSearchInput("");
  };
  const [results, setResults] = useState([]);
  console.log(`searchInput`, searchInput);

  return (
    <>
      <div>
        {/* Page Category */}
        <div>
          <CategorySelection
            onSelectCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
            activeCategory={activeCategory}
            setResults={setResults}
            setSearchInput={setSearchInput}
          />
        </div>

        {/* Blog */}
        <div className="flex w-full">
          <div className="flex flex-col lg:flex-row gap-12 h-auto w-full">
            {/* blog cards component */}
            <BlogCards
              blogs={blogs}
              currentPage={currentPage}
              selectedCategory={selectedCategory}
              pageSize={pageSize}
              results={results}
              searchInput={searchInput}
            />

            {/* sidebar component */}
            <div className="md:w-[40%] w-full space-y-6">
              <Ads />
              <SideBar />
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div>
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            blogs={blogs}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
