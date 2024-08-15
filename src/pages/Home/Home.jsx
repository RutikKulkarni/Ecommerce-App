import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Card key={product.id} product={product} addToCart={addToCart} />
              ))}
          </div>
          <div className="flex justify-center mt-10">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"flex items-center space-x-2"}
              previousLinkClassName={"px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"}
              nextLinkClassName={"px-3 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"}
              disabledClassName={"opacity-50 cursor-not-allowed"}
              activeClassName={"bg-blue-500 text-white rounded-md px-3 py-2"}
              pageLinkClassName={"px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
