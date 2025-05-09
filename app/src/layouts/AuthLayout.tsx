import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen max-w-lg mx-auto relative">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
