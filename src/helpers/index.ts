export function definedStore(storeName:string) {
  return{
    name: "",
    store:storeName,
    enabled: import.meta.env.MODE === "development" ? true : false
  }
}

//process.env.NODE_ENV === import.meta.env.MODE