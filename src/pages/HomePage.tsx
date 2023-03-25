//components
import ProductsList from "../components/products/ProductsList";


//reference https://www.pexels.com/
//Products https://css-tricks.com/practical-css-scroll-snapping/

function HomePage() {
  return (
    <div>
      <div className='w-full h-[15.4rem] sm:h-[22.4rem] md:h-[27.4rem] lg:h-[35.4rem] overflow-hidden -z-10'>
        <img
            src='https://images.unsplash.com/photo-1677012817243-d3d91db2e7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
            alt='unsplash_Marek_Piwnicki'
            className='min-w-full h-full sm:h-auto'
            loading="lazy"
          />
        <div className='absolute inset-0 flex justify-center items-center h-80 sm:h-[27rem] md:h-[32rem] lg:h-[40rem] bg-black/50 overflow-hidden '>
          <div className=" w-1/2 mt-10 text-white cursor-default">
            <h1 className="text-5xl sm:text-6xl ">Test Shopping</h1>
            <p className="sm:text-2xl leading-10">Our store has no products.</p>
          </div>
        </div>
      </div>
      <ProductsList/>
    </div>
  );
}

export default HomePage;
//
