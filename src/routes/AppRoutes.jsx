import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectRoute";
import NotFound from "../pages/not-found/NotFound";
import EmployeeList from "../pages/employees/EmployeeList";
import AddEmployee from "../pages/employees/AddEmployee";
import EmployeeDetails from "../pages/employees/EmployeeDetails";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Route */}
      <Route
        path="/"
        element={<Login />}
      />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>

        <Route element={<MainLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/employees"
            element={<EmployeeList />}
          />
            <Route
            path="/employees/add"
            element={<AddEmployee />}
          />

          <Route
            path="/employees/add/:id"
            element={<AddEmployee />}
          />
            <Route
            path="/employees/view/:id"
            element={<EmployeeDetails />}
          />
          <Route
            path="/attendance"
            element={<h1>Attendance</h1>}
          />

          <Route
            path="/leave"
            element={<h1>Leave</h1>}
          />

          <Route
            path="/settings"
            element={<h1>Settings</h1>}
          />

        </Route>

      </Route>


      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;