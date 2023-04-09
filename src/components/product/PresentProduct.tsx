import useAverageRGB from "hook/averageRGB/useAverageRGB";

type PresentProductPropsType = {
  productImageUrl: string;
  alt?: string;
  onOpen: () => void;
};

function PresentProduct({ productImageUrl, alt, onOpen }: PresentProductPropsType) {
  const averageRGB = useAverageRGB({ imageUrl: productImageUrl });
  const colorRGB = `rgba(${averageRGB.r}, ${averageRGB.g}, ${averageRGB.b}, 0.6)`;

  return (
    <div className='flex justify-center items-center md:w-[18rem] lg:w-[25rem] h-[20rem] md:h-[25rem] mb-4 md:mb-0'>
      <div
        className={`w-[16rem] h-[16rem] lg:w-[22rem] lg:h-[22rem] rounded-full`}
        style={{ backgroundColor: colorRGB }}
      />
      <div className='absolute w-[14rem] lg:w-[20rem] cursor-pointer z-10' onClick={onOpen}>
        <img src={productImageUrl} alt={alt} />
      </div>
    </div>
  );
}

export default PresentProduct;
