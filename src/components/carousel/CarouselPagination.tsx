type CarouselPaginationPropsType = {
  itemCount: number;
  activeIndex: number;
  onPaginationItemClick: (index: number) => void;
};

function CarouselPagination({ itemCount,activeIndex, onPaginationItemClick }: CarouselPaginationPropsType) {
  return (
    <div className=" absolute bottom-4 left-1/2 flex justify-center gap-4 z-20">
      {Array.from({ length: itemCount }, (_, index) => (
        <button 
          key={index} 
          onClick={() => onPaginationItemClick(index)}
          className={`w-4 h-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/50"} text-transparent cursor-pointer`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default CarouselPagination;
//const numberArray = Array.from({ length: 5 }, (_, index) => index + 1);
//console.log(numberArray); Output: [1, 2, 3, 4, 5]