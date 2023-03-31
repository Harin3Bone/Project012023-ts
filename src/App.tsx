import { useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

//store
import useAuthenticationStore from "./store/authentication/authentication.store";
import useProfileStore from "./store/profile/profile.store";

//context
import GlobalLoadingProvider from "./context/loading/GlobalLoadingProvider";

//Page
import HomePage from "./pages/HomePage";
import Products from "pages/Products";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ConfirmationEmailPage from "./pages/ConfirmationEmailPage";
import TestPage from "./pages/TestPage";
import ErrorPage from "./pages/ErrorPage";

//Components
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

//toast
import { ToastContainer } from "react-toastify";

function App() {
  const userJwt = useAuthenticationStore((state) => state.jwt);
  const onGetProfile = useProfileStore((state) => state.onGetProfile);

  const onGetProfileWithJwt = useCallback(async () => {
    await onGetProfile();
  }, []);

  useEffect(() => {
    let isMounted = false;
    if (userJwt) {
      !isMounted && onGetProfileWithJwt();
    }
    return () => {
      isMounted = true;
    };
  }, [userJwt]);

  return (
    <GlobalLoadingProvider>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} caseSensitive />
          <Route path='products' element={<Products />} caseSensitive />
          <Route element={<PrivateRoute />}>
            <Route path='about' element={<AboutPage />} caseSensitive />
            <Route path='account' element={<AccountPage />} caseSensitive />
          </Route>
        </Route>
        <Route path='sign-in' element={<SignInPage />} caseSensitive />
        <Route path='sign-up' element={<SignUpPage />} caseSensitive />
        <Route path='please-confirmation' element={<ConfirmationEmailPage />} caseSensitive />
        <Route path='test' element={<TestPage />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </GlobalLoadingProvider>
  );
}

export default App;
