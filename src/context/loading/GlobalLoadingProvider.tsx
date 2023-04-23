import { useState, useMemo, PropsWithChildren } from "react";
import { GlobalLoadingContext, GlobalLoadingContextType } from "./globalLoadingContext";

//component
import {Loader} from "components/addition/Loader";

type GlobalLoadingProviderType = {};

function GlobalLoadingProvider({ children }: PropsWithChildren<GlobalLoadingProviderType>) {
  //useState
  const [isOpen, setIsOpen] = useState(false);

  //useMemo
  const value = useMemo<GlobalLoadingContextType>(() => {
    return {
      isOpen: isOpen,
      onUpdateIsOpen: () => setIsOpen((prevIsOpen) => !prevIsOpen),
    };
  }, [isOpen]);

  return (
    <GlobalLoadingContext.Provider value={value}>
      <Loader isOpen={value.isOpen}/>
      {children}
    </GlobalLoadingContext.Provider>
  )
}

export default GlobalLoadingProvider;
