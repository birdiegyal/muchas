import { Outlet, Navigate, Link } from "react-router-dom";
import logo from "../assets/logo-muchas.png";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="mb-0">
            <Link
              to="/signin"
              className="flex w-screen justify-center items-start mt-5 pb-0 "
            >
              <img width="150px" src={logo} alt="" />
            </Link>
            <section className="flex flex-1 justify-center items-center flex-col">
              <Outlet />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
