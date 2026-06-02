import {
  FiUsers,
  FiCalendar,
  FiClock,
  FiBriefcase,
} from "react-icons/fi";

const Dashboard = () => {
  const user = JSON.parse(
    sessionStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-slate-100">
      
    

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Employees
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  120
                </h2>
              </div>

              <FiUsers
                size={32}
                className="text-blue-600"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Present Today
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  98
                </h2>
              </div>

              <FiCalendar
                size={32}
                className="text-green-600"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  On Leave
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  8
                </h2>
              </div>

              <FiBriefcase
                size={32}
                className="text-orange-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-500">
                  Working Hours
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  8h
                </h2>
              </div>

              <FiClock
                size={32}
                className="text-purple-600"
              />
            </div>
          </div>

        </div>

        {/* User Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">
            Employee Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-slate-500">
                Name
              </p>

              <h3 className="font-semibold">
                {user?.name}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Email
              </p>

              <h3 className="font-semibold">
                {user?.email}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Role
              </p>

              <h3 className="font-semibold capitalize">
                {user?.role}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Shift
              </p>

              <h3 className="font-semibold">
                {user?.shift?.shiftName}
              </h3>
            </div>

          </div>
        </div>

        {/* Leave Balance */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-5">
            Leave Balance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-slate-100 p-4 rounded-xl">
              <p>Sick Leave</p>
              <h3 className="text-2xl font-bold">
                {user?.leaveBalance?.sick}
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p>Casual Leave</p>
              <h3 className="text-2xl font-bold">
                {user?.leaveBalance?.casual}
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p>Paid Leave</p>
              <h3 className="text-2xl font-bold">
                {user?.leaveBalance?.paid}
              </h3>
            </div>

            <div className="bg-slate-100 p-4 rounded-xl">
              <p>Unpaid Leave</p>
              <h3 className="text-2xl font-bold">
                {user?.leaveBalance?.unpaid}
              </h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;