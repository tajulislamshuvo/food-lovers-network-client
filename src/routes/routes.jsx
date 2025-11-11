import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Page/ErrorPage";
import Loading from "../Components/Loading";
import AllReview from "../Page/AllReview";
import ReviewDetailes from "../Page/ReviewDetailes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/featuredReview'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all-review',
        element: <AllReview></AllReview>,
        loader: () => fetch('http://localhost:3000/review')
      },
      {
        path: '/review-detailes/:id',
        element: <ReviewDetailes></ReviewDetailes>
      }
    ]
  },


]);
