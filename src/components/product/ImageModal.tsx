type ImageModalPropsType = {
  productImageUrl: string;
  alt?: string;
  onClose: () => void;
};

function ImageModal({ productImageUrl, alt, onClose }: ImageModalPropsType) {
  return (
    <div>
      <div className='fixed inset-0 bg-black/60 z-20' onClick={onClose} />
      <div className='absolute max-sm:top-1/4 left-1/2 flex justify-center items-center -translate-x-1/2 translate-y-12 md:-translate-y-12 z-30'>
        <div className='flex justify-center items-center min-w-[20rem] sm:min-w-[30rem] p-8 rounded-lg bg-white shadow-2xl'>
          <img src={productImageUrl} alt={alt} className=" rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
