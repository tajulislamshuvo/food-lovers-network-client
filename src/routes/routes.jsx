import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Page/ErrorPage";
import Loading from "../Components/Loading";
import AllReview from "../Page/AllReview";
import ReviewDetailes from "../Page/ReviewDetailes";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../Page/AddReview";
import MyReview from "../Page/MyReview";
import EditReview from "../Page/EditReview";
import Blog from "../Page/BlogPage";
import MyFavourite from "../Page/MyFavourite";


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
      }, {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/add-review',
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: '/my-review',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
      },
      {
        path: '/my-favourite',
        element: <PrivateRoute><MyFavourite></MyFavourite></PrivateRoute>
      },
      {
        path: '/edit-review/:id',
        element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/review/${params.id}`),
      },
      {
        path: '/review-detailes/:id',
        element: <PrivateRoute><ReviewDetailes></ReviewDetailes></PrivateRoute>
      }
    ]
  },


]);
