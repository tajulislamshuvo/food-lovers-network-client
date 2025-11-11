import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div><Loading></Loading></div>;
  }

  if (user) {
    return children;

  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;