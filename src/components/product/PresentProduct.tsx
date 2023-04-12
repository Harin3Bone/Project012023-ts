import useCheckTransparency from "hook/useExecuteImg/useCheckTransparency";
import useAverageRGB from "hook/useExecuteImg/useAverageRGB";

type PresentProductPropsType = {
  productImageUrl: string;
  alt?: string;
  onOpen: () => void;
};

function PresentProduct({ productImageUrl, alt, onOpen }: PresentProductPropsType) {
  const isTransparent = useCheckTransparency({ imageUrl: productImageUrl });
  const averageRGB = useAverageRGB({ imageUrl: productImageUrl });
  const colorRGB = isTransparent
    ? `rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 0.4)`
    : "";

  return (
    <div className='flex justify-center items-center md:w-[18rem] lg:w-[25rem] h-[20rem] md:h-[25rem] mb-4 md:mb-0'>
      <div className={isTransparent ? "block" : "hidden"}>
        <div
          className={`w-[16rem] h-[16rem] lg:w-[22rem] lg:h-[22rem] rounded-full`}
          style={{ backgroundColor: colorRGB || "transparent" }}
        />
      </div>
      <div
        className={`${
          isTransparent ? "w-[14rem] lg:w-[20rem]" : "w-[18rem] md:w-[16rem] lg:w-[24rem]"
        } absolute cursor-pointer z-10`}
        onClick={onOpen}
      >
        <img
          src={productImageUrl}
          alt={alt}
          className={isTransparent ? "" : "rounded-2xl shadow-xl"}
        />
      </div>
    </div>
  );
}

export default PresentProduct;
