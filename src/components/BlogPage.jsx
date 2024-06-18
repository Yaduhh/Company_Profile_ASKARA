import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import Ads from "./Ads";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs per page
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

  useEffect(() => {
    if (searchInput) {
      const filteredResults = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchInput, blogs]);

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
  const noBlogsMessage = blogs.length === 0 && !searchInput && (
    <div className="flex-grow text-center py-10 font-primary">
      Tidak ada postingan
    </div>
  );

  const noResultsMessage = results.length === 0 && searchInput && (
    <div className="flex-grow text-center py-10 font-primary">
      Opps.. "{searchInput}" saat ini belum tersedia! Nantikan terus updatenya
      ya.
    </div>
  );

  return (
    <>
      <div className="p-6 lg:p-0">
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
        <div className="grid grid-cols-11 w-full gap-6">
          <div className="col-span-8">
            <div className="flex flex-col lg:flex-row gap-12 h-auto w-full">
              {/* blog cards component */}
              {noBlogsMessage || noResultsMessage ? (
                noBlogsMessage || noResultsMessage
              ) : (
                <BlogCards
                  blogs={blogs}
                  currentPage={currentPage}
                  selectedCategory={selectedCategory}
                  pageSize={pageSize}
                  results={results}
                  searchInput={searchInput}
                />
              )}
            </div>
          </div>
          {/* sidebar component */}
          <div className="w-full space-y-6 col-span-3">
            <SideBar />
          </div>
        </div>

        {/* Pagination Section */}
        {blogs.length > 0 && (
          <div>
            <Pagination
              onPageChange={handlePageChange}
              currentPage={currentPage}
              blogs={blogs}
              pageSize={pageSize}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;
