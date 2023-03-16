import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// https://flowbite.com/docs/forms/search-input/

type SearchBoxPropsType = {
  value?: string;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBox({ value, onSubmitForm, onChangeInput }: SearchBoxPropsType) {
  return (
    <form className='w-72 sm:w-1/2' onSubmit={onSubmitForm}>
      <label htmlFor='default-search' className='sr-only mb-2 text-sm text-gray-900'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          type='search'
          id='default-search'
          placeholder='Search'
          value={value}
          onChange={onChangeInput}
          className='w-full p-4 pl-10 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-900 focus:border-gray-300'
        ></input>
        <button
          type='submit'
          className='absolute right-2.5 bottom-2.5 px-4 py-2 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500  text-white text-sm  focus:ring-4 focus:outline-none focus:ring-gray-300 '
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
