type HeroImagePropsType = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

function HeroImage({ imageUrl, title, subtitle }: HeroImagePropsType) {
  return (
    <div className='relative w-full h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[36rem] overflow-hidden -z-10'>
      <img
        src={imageUrl}
        alt='carousel_image'
        className='min-w-full h-full object-cover object-center'
        loading='lazy'
      />
      <div className='absolute inset-0 flex justify-center items-center bg-black/50 overflow-hidden '>
        <div className=' w-1/2 mt-10 text-white cursor-default'>
          <h1 className=' mb-2 text-5xl sm:text-6xl '>{title}</h1>
          <p className='sm:text-2xl'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
