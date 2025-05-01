import React from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return <main className="min-h-screen max-w-md mx-auto bg-dark_1 relative px-3">{children}</main>;
};

export default MainLayout;
