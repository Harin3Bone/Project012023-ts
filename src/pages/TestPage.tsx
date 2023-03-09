import "../style/App.css";

function TestPage() {
  return (
    <div>
      <p>test</p>
      <div className='flex flex-col w-36 sm:w-44 lg:w-52 xl:w-64 h-52 sm:h-64 lg:h-[18rem] xl:h-[22rem] border-neutral-700 rounded-lg bg-white shadow-2xl cursor-pointer overflow-hidden hover:border-2'>
        <div className='flex items-center w-36 sm:w-44 lg:w-52 xl:w-64 h-36 sm:h-44 lg:h-52 xl:h-64 mt-1 sm:mt-2 lg:mt-0 overflow-hidden '>
          {/* <img src={img} alt={imgName} /> */}
        </div>
        <div className='flex flex-col mt-2 sm:mt-3 lg:mt-1 xl:mt-4 mx-1 px-1 py-1 xl:p2 rounded-lg bg-neutral-700 text-white text-xs sm:text-sm lg:text-lg overflow-hidden'>
          {/* <p>{name}</p>
          <p className=' mt-2 mr-1 sm:mr-2 text-end'>{price} $</p> */}
        </div>
      </div>
    </div>
  );
}

export default TestPage;

