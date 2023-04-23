//reference Products https://www.frontendpractice.com/projects/backstage-talks
//reference https://www.kingpower.com
//reference https://www.facebook.com/photo?fbid=186873057464536&set=pcb.618229813483132
//reference https://keychronthailand.com/products/k1?variant=44106952900840

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useProductData from "hook/useProductData";

import PresentProduct from "components/product/PresentProduct";
import ImageModal from "components/product/ImageModal";
import AddToCartForm from "components/product/AddToCartForm";

function Products() {
  const [searchParams] = useSearchParams();

  //useState
  const [isImgOpen, setIsImgOpen] = useState<boolean>(false);

  const dummy = searchParams.get("id") || "";
  const product = useProductData({ item: dummy });
  // console.log(product?.data);

  const price: number = product?.data?.price ? product?.data?.price : 0;
  const stockNumber: number = product?.data?.stock ? product?.data?.stock : 0;
  const productImageUrl: string = product?.data?.img?.formats?.small?.url
    ? product?.data?.img?.formats?.small?.url
    : "";

  useEffect(() => {
    if (isImgOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isImgOpen]);

  return (
    <div className='flex justify-center md:my-16 '>
      <div className={isImgOpen ? "block" : "hidden"}>
        <ImageModal
          productImageUrl={productImageUrl}
          alt={product?.data?.img?.formats?.small?.hash}
          onClose={() => setIsImgOpen(false)}
        />
      </div>
      <div className='w-screen md:w-auto lg:w-[54rem] xl:w-[56rem] 2xl:w-[60rem] sm:px-16 md:px-8 lg:px-12 py-10 md:py-8 rounded-lg bg-white shadow-2xl overflow-hidden'>
        <div className='flex justify-center md:justify-between'>
          <div className='hidden md:block'>
            <PresentProduct
              productImageUrl={productImageUrl}
              alt={product?.data?.img?.formats?.small?.hash}
              onOpen={() => setIsImgOpen((prevIsImgOpen) => !prevIsImgOpen)}
            />
          </div>
          <div className='w-[20rem] sm:w-[26rem] md:w-[22rem] px-4 sm:px-0 md:pl-4 lg:pl-0 lg:pr-4 md:mt-4'>
            <p className='inline-block whitespace-nowrap px-4 py-1 rounded-full bg-black text-white text-sm sm:text-base'>
              {product?.data?.category?.desc}
            </p>
            <h2 className=' mt-2 text-3xl sm:text-4xl'>{product?.data?.name}</h2>
            <p className='mb-4 text-sm sm:text-base'>
              SKU : {product?.data?.stock && new Intl.NumberFormat().format(stockNumber)}
            </p>
            <div className='block md:hidden'>
              <PresentProduct
                productImageUrl={productImageUrl}
                alt={product?.data?.img?.formats?.small?.hash}
                onOpen={() => setIsImgOpen((prevIsImgOpen) => !prevIsImgOpen)}
              />
            </div>
            <p className='text-justify text-sm sm:text-base'>{product?.data?.desc}</p>
            <AddToCartForm price={price} maxStock={stockNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
//const dummy = searchParams.get("id") || ""; คือการทำให้ dummy เป็น string อย่าเดียว
// {/* <code>{JSON.stringify(product?.data)}</code> */}
//inline-block และ whitespace-nowrap จะทำให้ปรับขนาดตามจำนวนอักษรและป้องกันการขึ้นบรรทัดใหม่