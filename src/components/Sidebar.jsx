import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiFileText,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiHome size={20} />,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: <FiUsers size={20} />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FiCalendar size={20} />,
    },
    {
      name: "Leave",
      path: "/leave",
      icon: <FiFileText size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <aside className="w-72 h-screen fixed left-0 top-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col shadow-2xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold tracking-wide">
          HRMS Pro
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Workforce Management
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span className="font-medium">
              {item.name}
            </span>
          </NavLink>
        ))}

      </div>

      {/* User Info */}
      <div className="px-4 pb-4">

       

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300"
        >
          <FiLogOut size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;