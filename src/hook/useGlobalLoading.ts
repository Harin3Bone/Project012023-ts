import {useContext} from 'react'

//hook
import { GlobalLoadingContext } from 'src/context/loading/globalLoadingContext'

 export function useGlobalLoading() {
  const context = useContext(GlobalLoadingContext)
  if(!context){
    throw new Error("useGlobalLoading was used outside of its Provider (GlobalLoadingProvider)")
  }
  return context
}
