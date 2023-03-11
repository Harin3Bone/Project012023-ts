import { useState, useMemo, useCallback } from "react";

import { useGlobalLoading } from "hook/useGlobalLoading";
import useProduct from "hook/useProduct";

import SearchBox from "components/showProducts/SearchBox";
import Product from "./Product";

function GridProducts() {
  const [onHandleChange, setOnHandleChange] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const { onUpdateIsOpen } = useGlobalLoading()
  const products = useProduct();
 
  //useMemo
  const filteredProduct = useMemo(
    () =>
      products?.data?.filter((product) =>
        product.name?.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [searchText, products],
  );

  //useCallback
  const handleSearch = useCallback((text: string) => {
    onUpdateIsOpen()
    const timerId = setTimeout(() => {
      setSearchText(text);
      onUpdateIsOpen()
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      <SearchBox
        onSubmitForm={(event) => {
          event.preventDefault();
          handleSearch(onHandleChange);
        }}
        inputValue={onHandleChange}
        onChangeInput={(event) => setOnHandleChange(event.target.value)}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-5 sm:gap-x-10 lg:gap-0 gap-y-10 lg:gap-y-20 justify-items-center items-center w-full my-20 z-20'>
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
  );
}

export default GridProducts;
// chatGPT ฉันสามารถดึงข้อมูลออกมาได้แต่แค่ 2 ตัวใน products.data ตัวแรกและตัวสุดท้าย เป็นข้อมูลที่ฉันต้องการแต่ยังไม่ได้ทั้งหมดที่มีใน products.data
//JSON.stringify() เปลี่ยน [] เป็น text ที่สามารถแสดงใน html ได้
//JSON.parse() เปลี่ยน text เป็น []
//<pre><code>{JSON.stringify(...)}<code><pre> การแสดงข้อมูล[]