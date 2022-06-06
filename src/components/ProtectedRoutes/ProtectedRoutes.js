import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  /* const user = useSelector((state) => state.user); */
  const user = "Luis";
  if (user !== "") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
