import { Outlet, Navigate, Link } from "react-router-dom";
import logo from "../../public/muchasLogo.png"


const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="m-auto">
            <div className="w-full max-h-[20%]">
              <img src={logo} alt="" />
            </div>
            <section className="flex flex-1 justify-center items-center flex-col ">


              <Outlet />
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default AuthLayout;
