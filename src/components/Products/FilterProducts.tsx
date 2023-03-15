function FilterProducts() {
  return (
    <div className=' w-60 p-4 bg-white rounded-xl shadow-2xl'>
      <p className='my-2 text-xl'>Category</p>
      <div className='ml-2'>
        <div className=' flex items-center '>
          <input type='checkbox' value={1} className='text-lg' />
          <span className='ml-2 text-lg cursor-pointer'>Bluetooth speakers</span>
        </div>
        <div className=' flex items-center'>
          <input type='checkbox' value={2} />
          <span className='ml-2 text-lg cursor-pointer'>Smart watches</span>
        </div>
        <div className=' flex items-center'>
          <input type='checkbox' value={3} />
          <span className='ml-2 text-lg cursor-pointer'>Head Phones</span>
        </div>
        <div className=' flex items-center'>
          <input type='checkbox' value={4} />
          <span className='ml-2 text-lg cursor-pointer'>Wireless earbuds</span>
        </div>
      </div>
      <div className='flex justify-center mt-6 mb-3'>
        <div className='flex justify-between w-44'>
          <button className='filterCheckbox w-20 px-2 py-1 border-2 rounded-lg cursor-pointer select-none hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-0.5  active:shadow-none active:translate-y-0'>
            Clear All
          </button>
          <button className='filterCheckbox w-20 px-2 py-1 border-2 rounded-lg bg-black text-white cursor-pointer select-none hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5  active:shadow-none active:translate-y-0'>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
