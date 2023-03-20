import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Hooks
import useCatalogFiltering from "hook/useCatalogFiltering";

// Components
import SearchBox from "components/products/SearchBox";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductsList() {
  const {
    products,
    category,
    searchInput,
    filteredProduct,
    handleSearchSubmit,
    handleSearchInputChange,
    handleCategorySubmit,
    handleResetForm,
    handleCategoryInputChange,
  } = useCatalogFiltering();

  const [searchParams] = useSearchParams();

  //useState Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.data && filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  //useEffect
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    setCurrentPage(page);
  }, [location]);

  return (
    <div className='py-[5%] lg:py-[2.5%]'>
      <div className='flex justify-center items-center mt-6 mb-3 mx-[5%]'>
        <div className='flex justify-center items-center flex-col w-full md:w-[506px] lg:w-[674px] xl:w-[920px] 2xl:w-[1000px] md:ml-[15rem] lg:ml-56 xl:ml-48 2xl:ml-20'>
          <SearchBox
            value={searchInput}
            onSubmitForm={(event) => {
              event.preventDefault();
              handleSearchSubmit(searchInput);
            }}
            onChangeInput={handleSearchInputChange}
          />
          <div className='flex justify-end items-center w-full mt-6'>
            <select id='sortOrder' className='rounded-md border border-gray-300 px-3 py-2 text-slate-800 text-lg'>
              <option value='asc'>{"Product Name (A-Z)"}</option>
              <option value='desc'>{"Product Name (Z-A)"}</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-row px-[7.5%] md:px-0 md:pr-[7%] md:pl-[3%] 2xl:mr-[5%]'>
        <div className=' hidden md:block mt-10 md:mr-6 2xl:mr-0'>
          <CategoryFilter
            category={category?.data}
            onSubmitForm={(event) => {
              event.preventDefault();
              handleCategorySubmit();
            }}
            onResetForm={handleResetForm}
            onChangeInput={handleCategoryInputChange}
          />
        </div>
        <div className='flex justify-center w-full md:w-[506px] lg:w-[674px] xl:w-[920px] 2xl:w-[1066px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-6 lg:gap-x-10 gap-y-10 justify-items-center items-center my-10 z-20'>
            {currentItems?.map((data) => {
              return (
                <Product
                  key={data.id}
                  name={data.name}
                  price={data.price}
                  img={data.img?.formats?.small?.url}
                  imgName={data.img?.name}
                  stock={data.stock}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredProduct.length}
        currentPage={currentPage}
        onPageChange={(pageNumber: number) => setCurrentPage(pageNumber)}
      />
    </div>
  );
}

export default ProductsList;
//JSON.stringify() เปลี่ยน [] เป็น text ที่สามารถแสดงใน html ได้
//JSON.parse() เปลี่ยน text เป็น []
//<pre><code>{JSON.stringify(...)}<code><pre> การแสดงข้อมูล[]
