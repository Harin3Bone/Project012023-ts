import useAuthenticationStore from "store/authentication/authentication.store";

function LayoutZ() {
  //store
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  
  return (
    <div>LayoutZ</div>
  )
}

export default LayoutZ