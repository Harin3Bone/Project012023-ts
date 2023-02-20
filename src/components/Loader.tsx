type LoaderPropsType = {
  isOpen : boolean
}

export function Loader({isOpen = false}:LoaderPropsType){
  if(!isOpen) return null
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black/50 z-[998] overflow-hidden'>
      <span className="animate-spin w-12 h-12 border-8 border-white border-r-transparent rounded-full z-[999]"/>
    </div>
  )
}
