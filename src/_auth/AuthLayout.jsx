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
          <div>
            <Link
              to="/signin"
              className="flex w-screen justify-center items-start"
            >
              <img width={100} src={logo} alt="" />
            </Link>
            <section className="flex flex-1 justify-center items-center flex-col py-10">
              <Outlet />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
