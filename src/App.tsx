import { Routes, Route } from "react-router-dom";

//context
import AuthenticationProvider from "context/auth/AuthenticationProvider";
import GlobalLoadingProvider from "context/loading/GlobalLoadingProvider";

//Page
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import ConfirmationEmailPage from "pages/ConfirmationEmailPage";
import TestPage from "pages/TestPage";
import ErrorPage from "pages/ErrorPage";

//Components
import Navbar from "components/Navbar";
import PrivateRoute from "components/PrivateRoute";

//toast
import { ToastContainer } from "react-toastify";

function App() {
  // console.log(import.meta.env.VITE_API_URL);
  
  return (
    <GlobalLoadingProvider>
      <ToastContainer/> 
      <AuthenticationProvider>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<HomePage />} caseSensitive />
            <Route element={<PrivateRoute/>}>
              <Route path='about' element={<AboutPage />} caseSensitive />
            </Route>
          </Route>
          <Route path='sign-in' element={<SignInPage />} caseSensitive />
          <Route path='sign-up' element={<SignUpPage />} caseSensitive />
          <Route path='please-confirmation' element={<ConfirmationEmailPage />} caseSensitive />
          <Route path='test' element={<TestPage />} caseSensitive />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </AuthenticationProvider>
    </GlobalLoadingProvider>
  );
}

export default App;
