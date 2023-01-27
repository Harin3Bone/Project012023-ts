import { Routes, Route } from "react-router-dom";

//context
import AuthenticationProvider from "context/auth/AuthenticationProvider";

//Page
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";
import PrivateRoute from "components/PrivateRoute";
import ErrorPage from "pages/ErrorPage";

//Components
import Navbar from "components/Navbar";

function App() {
  return (
    <AuthenticationProvider>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} caseSensitive />
          <Route element={<PrivateRoute/>}>
            <Route path='about' element={<AboutPage />} caseSensitive />
          </Route>
        </Route>
        <Route path='signin' element={<SignInPage />} caseSensitive />
        <Route path='signup' element={<SignUpPage />} caseSensitive />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AuthenticationProvider>
  );
}

export default App;
