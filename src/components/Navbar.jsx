const Navbar = () => {
  const user = JSON.parse(
    sessionStorage.getItem("user") || "{}"
  );

  const currentHour = new Date().getHours();

  let greeting = "Good Evening";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="bg-white h-20 px-8 flex items-center justify-between border-b border-slate-200">

      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {greeting}, {user?.name?.split(" ")[0]} 👋
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Welcome back to your HRMS Dashboard
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <div className="text-right">
          <h3 className="font-semibold text-slate-800">
            {user?.name}
          </h3>

          <p className="text-sm text-slate-500 capitalize">
            {user?.role}
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
          {user?.name?.charAt(0)?.toUpperCase()}
        </div>

      </div>

    </div>
  );
};

export default Navbar;