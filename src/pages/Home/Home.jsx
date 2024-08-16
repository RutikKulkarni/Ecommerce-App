import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { fetchProducts } from "../../utils/api";
import ReactPaginate from "react-paginate";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
          <div className="text-2xl text-gray-700">Loading...</div>
        </div>
      ) : (
        <>
          <Search searchProducts={handleSearch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
          </div>
          <div className="flex justify-center mt-10 mb-12">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                "flex flex-wrap justify-center items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg p-2 shadow-sm"
              }
              previousLinkClassName={
                "px-3 py-1 text-gray-600 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              }
              nextLinkClassName={
                "px-3 py-1 text-gray-600 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              }
              disabledClassName={"opacity-50 cursor-not-allowed"}
              activeClassName={
                "bg-gray-300 text-gray-800 rounded-md px-3 py-1 shadow-md"
              }
              pageLinkClassName={
                "px-3 py-1 text-gray-600 bg-white rounded-md border border-gray-300 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
              }
              breakLabel="..."
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
