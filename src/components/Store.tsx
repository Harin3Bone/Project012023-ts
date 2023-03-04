import useProductStore from "store/product/product.store";

function Store() {
  const data = useProductStore((state) => ({ products: state.data }));
  console.log(data.products);
  
  return (
    <div>
      <div className=' flex justify-center items-center my-10'>
        <input type='text' />
        <button>search</button>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-x-10 lg:gap-0 gap-y-10 lg:gap-y-20 justify-items-center items-center w-full my-20'>
        <div className='w-36 sm:w-44 lg:w-52 xl:w-64 h-52 sm:h-64 lg:h-[18rem] xl:h-[22rem] rounded-lg bg-white shadow-2xl cursor-pointer overflow-hidden hover:border-2'>
          <div className='w-36 sm:w-44 lg:w-52 xl:w-64 h-36 sm:h-44 lg:h-52 xl:h-64 overflow-hidden '>
            <img
              src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'
              className=' relative bottom-6 sm:bottom-8 lg:bottom-12'
            />
          </div>
          <div className='m-2 xl:mt-5 mx-5 text-base sm:text-2xl overflow-hidden'>
            <p>abc</p>
            <p className=' mr-2 text-end'>10000</p>
          </div>
        </div>
        {/* test */}
        <div className='w-36 sm:w-44 lg:w-52 xl:w-64 h-52 sm:h-64 lg:h-[18rem] xl:h-[22rem] rounded-lg bg-white shadow-2xl cursor-pointer overflow-hidden hover:border-2'>
          <div className='w-36 sm:w-44 lg:w-52 xl:w-64 h-36 sm:h-44 lg:h-52 xl:h-64 overflow-hidden '>
            <img
              src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'
              className=' relative bottom-6 sm:bottom-8 lg:bottom-12'
            />
          </div>
          <div className='m-2 xl:mt-5 mx-5 text-base sm:text-2xl overflow-hidden'>
            <p></p>
            <p className=' mr-2 text-end'>10000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
