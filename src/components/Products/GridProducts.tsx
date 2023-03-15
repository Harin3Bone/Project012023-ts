import { useState, useMemo, useCallback } from "react";

//hook
import { useGlobalLoading } from "hook/useGlobalLoading";
import useCatalogData from "hook/useCatalogData";

//component
import SearchBox from "components/Products/SearchBox";
import CategoryFilter from "./CategoryFilter";
import Product from "./Product";

function GridProducts() {
  const [products, category] = useCatalogData();

  const { onUpdateIsOpen } = useGlobalLoading();

  //SearchBox useState
  const [onHandleChange, setOnHandleChange] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  //CategoryFilter useState
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const onHandleCategorySelection = (categoryId: number, isChecked: boolean) => {
    setSelectedCategories((prevState) =>
      isChecked ? [...prevState, categoryId] : prevState.filter((id) => id !== categoryId),
    );
  };

  //useMemo
  const filteredProduct = useMemo(
    () =>
      products?.data
        ? products?.data?.filter(
            (product) =>
              product.name?.toLowerCase().includes(searchText.toLowerCase().trim()) &&
              (selectedCategories.length === 0 ||
                (product.category?.id && selectedCategories.includes(product.category.id))),
          )
        : [],
    [searchText, products, selectedCategories],
  );

  //useCallback
  const handleSearch = useCallback((text: string) => {
    onUpdateIsOpen();
    const timerId = setTimeout(() => {
      setSearchText(text);
      onUpdateIsOpen();
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className='py-[5%] lg:py-[2.5%]'>
      <div className=' flex justify-center items-center my-12'>
        <SearchBox
          onSubmitForm={(event) => {
            event.preventDefault();
            handleSearch(onHandleChange);
          }}
          inputValue={onHandleChange}
          onChangeInput={(event) => setOnHandleChange(event.target.value)}
        />
      </div>
      <div className='flex justify-between flex-row px-[7.5%] md:px-0 md:pr-[7%] md:pl-[3%] 2xl:mx-[0%]'>
        <div className=' hidden md:block mt-10 mr-6 lg:mr-10'>
          <CategoryFilter category={category?.data} onCategoryChange={onHandleCategorySelection} />
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
//JSON.stringify() เปลี่ยน [] เป็น text ที่สามารถแสดงใน html ได้
//JSON.parse() เปลี่ยน text เป็น []
//<pre><code>{JSON.stringify(...)}<code><pre> การแสดงข้อมูล[]
