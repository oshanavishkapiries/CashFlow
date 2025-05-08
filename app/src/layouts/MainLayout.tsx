import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen max-w-xl mx-auto relative">
      <Outlet />
    </div>
  );
};

export default MainLayout;
