import React, { useState } from "react";

function useUserAuth() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return {
    user,
    setUser,
  };
}
export default useUserAuth;
