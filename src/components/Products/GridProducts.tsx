// Hooks
import useCatalogFiltering from "hook/useCatalogFiltering";

// Components
import SearchBox from "components/Products/SearchBox";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";

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
      <div className='flex justify-between flex-row px-[7.5%] md:px-0 md:pr-[7%] md:pl-[3%] 2xl:mx-[0%]'>
        <div className=' hidden md:block mt-10 mr-6 lg:mr-10'>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-6 lg:gap-x-10  gap-y-10 justify-items-center items-center w-full my-10 z-20'>
          {products?.data &&
            filteredProduct?.map((data) => {
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
  );
}

export default GridProducts;
//pagination
//trim() สำหรับตัดช่องว่างออกไป
//parseInt(ข้อมูลที่ต้องการจะแปล, แปลงเป็นอะไร เช่น เลขฐาน 2,10,16)
//JSON.stringify() เปลี่ยน [] เป็น text ที่สามารถแสดงใน html ได้
//JSON.parse() เปลี่ยน text เป็น []
//<pre><code>{JSON.stringify(...)}<code><pre> การแสดงข้อมูล[]
