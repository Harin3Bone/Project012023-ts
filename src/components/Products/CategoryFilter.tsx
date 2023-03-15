import { CategoriesDataType } from "api/category/categories.type";

type CategoryFilterPropTypes = {
  category: CategoriesDataType[];
  onCategoryChange: (categoryId: number, isChecked: boolean) => void;
};

function CategoryFilter({ category, onCategoryChange }: Partial<CategoryFilterPropTypes>) {
  return (
    <form className=' w-60 p-4 bg-white rounded-xl shadow-2xl'>
      <p className='my-2 text-xl'>Category</p>
      <div className='ml-2'>
        {category &&
          category.map((data) => {
            return (
              <div key={data.id} className=' flex items-center '>
                <input
                  type='checkbox'
                  value={data.id}
                  onChange={(event) => {
                    const categoryId = parseInt(event.target.value, 10);
                    const isChecked = event.target.checked;
                    if (onCategoryChange) {
                      onCategoryChange(categoryId, isChecked);
                    }
                  }}
                  className='text-lg'
                />
                <span className='ml-2 text-lg cursor-pointer'>
                  {data.title ? data.title : data.desc}
                </span>
              </div>
            );
          })}
      </div>
      <div className='flex justify-center mt-6 mb-3'>
        <div className='flex justify-between w-44'>
          <button
            type='reset'
            className='filterCheckbox w-20 px-2 py-1 border-2 rounded-lg cursor-pointer select-none hover:bg-black hover:text-white hover:shadow-lg hover:-translate-y-0.5  active:shadow-none active:translate-y-0'
          >
            Clear All
          </button>
          <button
            type='submit'
            className='filterCheckbox w-20 px-2 py-1 border-2 rounded-lg bg-black text-white cursor-pointer select-none hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-0.5  active:shadow-none active:translate-y-0'
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
}

export default CategoryFilter;
//Partial ใส่หรือไม่ก็ได้
