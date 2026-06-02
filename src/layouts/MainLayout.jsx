import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-72 flex-1 min-h-screen bg-slate-100">

        <Navbar />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default MainLayout;