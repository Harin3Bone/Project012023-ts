import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly } from "@fortawesome/free-solid-svg-icons";

import formatPrice from "helpers/*";

type ProductPropTypes = {
  name?: string;
  price?: number;
  img?: string;
  imgName?: string;
  stock?: number;
};

//reference https://codepen.io/havardob/pen/RwVbaLo

function Product({name, price, img, imgName, stock }: ProductPropTypes) {
  return (
    <NavLink to={`products?name=${name}`}>
      <div className='relative w-56 p-4 pb-2 rounded-2xl bg-white shadow-2xl ease-in delay-100 overflow-hidden hover:-translate-y-1 hover:drop-shadow-lg'>
        <div className='flex items-center justify-center rounded-lg border-2 border-[#f7f0f0] bg-white overflow-hidden'>
          <img src={img} alt={imgName} className='block max-w-full h-40' loading='lazy' />
        </div>
        <div className='flex items-center h-20 mt-3 p-2 text-xl no-underline'>
          <p className='text-ellipsis'>{name}</p>
        </div>
        <div className='flex items-center justify-between flex-wrap p-2 pt-2 border-t-[1px] border-gray-300'>
          <div className='flex justify-between items-center'>
            <FontAwesomeIcon icon={faDolly} />
            <p className='ml-1'>{stock && new Intl.NumberFormat().format(stock)}</p>
          </div>
          <div>
            <p>{price && formatPrice(price)}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
