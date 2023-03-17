import { useState } from "react";

// Hooks
import useCatalogFiltering from "hook/useCatalogFiltering";

// Components
import SearchBox from "components/products/SearchBox";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";
import Pagination from "./Pagination";

function GridProducts() {
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

  //useState Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.data && filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='py-[5%] lg:py-[2.5%]'>
      <div className=' flex justify-center items-center my-12'>
        <SearchBox
          value={searchInput}
          onSubmitForm={(event) => {
            event.preventDefault();
            handleSearchSubmit(searchInput);
          }}
          onChangeInput={handleSearchInputChange}
        />
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

export default GridProducts;
//trim() สำหรับตัดช่องว่างออกไป
//parseInt(ข้อมูลที่ต้องการจะแปล, แปลงเป็นอะไร เช่น เลขฐาน 2,10,16)
//JSON.stringify() เปลี่ยน [] เป็น text ที่สามารถแสดงใน html ได้
//JSON.parse() เปลี่ยน text เป็น []
//<pre><code>{JSON.stringify(...)}<code><pre> การแสดงข้อมูล[]
//w-[546px] w-[652px] w-[640px] w-[860px]