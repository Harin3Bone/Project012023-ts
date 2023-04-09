import { CategoriesDataType } from "api/category/categories.type";
// import "style/App.css";

import ButtonMultipurpose from "components/button/ButtonMultipurpose";

//reference https://www.kingpower.com

type CategoryFilterPropTypes = {
  category: CategoriesDataType[];
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onResetForm: () => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CategoryFilter({
  category,
  onChangeInput,
  onResetForm,
  onSubmitForm,
}: Partial<CategoryFilterPropTypes>) {
  return (
    <form
      onSubmit={onSubmitForm}
      onReset={onResetForm}
      className=' w-60 p-4 bg-white rounded-xl shadow-2xl'
    >
      <p className='my-2 text-xl'>Category</p>
      <div className='ml-2'>
        {category &&
          category.map((data) => {
            return (
              <div key={data.id} className=' flex items-center '>
                <input
                  type='checkbox'
                  value={data.id}
                  onChange={onChangeInput}
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
          <ButtonMultipurpose
            type='reset'
            addition={"w-20 px-2 py-1 rounded-lg hover:bg-black hover:text-white"}
          >
            Clear All
          </ButtonMultipurpose>
          <ButtonMultipurpose
            type='submit'
            addition={
              "w-20 px-2 py-1 rounded-lg bg-black text-white hover:bg-white hover:text-black"
            }
          >
            Apply
          </ButtonMultipurpose>
        </div>
      </div>
    </form>
  );
}

export default CategoryFilter;
//Partial ใส่หรือไม่ก็ได้
