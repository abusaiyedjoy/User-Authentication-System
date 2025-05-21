
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SignIn from './../Pages/login/SignIn';
import SignUp from './../Pages/register/SignUp';
import ForgotPassword from './../Pages/forgot-password/ForgotPassword';
import OTPVerification from './../Pages/otp-verification/OTPVerification';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/register",
        element: <SignUp />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/otp-verification",
        element: <OTPVerification />
      },
    ],
  },
]);

export default Router;