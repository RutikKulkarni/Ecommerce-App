import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import { fetchProducts } from "../../utils/api";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Popup from "../../components/Popup/Popup";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setPageNumber(0);
  }, [searchTerm, products]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container justify-center mx-auto p-6">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <div className="animate-spin rounded-full border-4 border-t-4 border-blue-600 h-12 w-12"></div>
          <div className="text-xl text-gray-700">Loading...</div>
        </div>
      ) : (
        <>
          <Search searchProducts={handleSearch} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  openPopup={openPopup}
                  addToCart={addToCart}
                />
              ))}
          </div>
          <div className="flex justify-center mt-10 mb-12">
            <ReactPaginate
              previousLabel={
                <span className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                  <FaChevronLeft className="h-5 w-5" />
                  <span className="hidden md:inline">Previous</span>
                </span>
              }
              nextLabel={
                <span className="flex items-center space-x-2 text-gray-500 hover:text-blue-600">
                  <span className="hidden md:inline">Next</span>
                  <FaChevronRight className="h-5 w-5" />
                </span>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName="flex space-x-2"
              previousLinkClassName="flex items-center space-x-2 font-medium"
              nextLinkClassName="flex items-center space-x-2 font-medium"
              disabledClassName="text-gray-300 cursor-not-allowed"
              activeClassName="text-blue-600"
              pageLinkClassName="px-4 py-2 border border-gray-300 rounded-full hover:bg-blue-600 hover:text-white"
              breakLabel="..."
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
            />
          </div>
          {selectedProduct && (
            <Popup
              product={selectedProduct}
              onClose={closePopup}
              addToCart={addToCart}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
