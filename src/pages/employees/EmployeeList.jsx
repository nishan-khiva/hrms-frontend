import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiEye,
} from "react-icons/fi";

import {
  getEmployees,
  deleteEmployee,
} from "../../api/employeeApi";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalEmployees, setTotalEmployees] = useState(0);

  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const data = await getEmployees({
        page: currentPage,
        limit: 10,
        search,
        status,
      });

      console.log("Employees API:", data);

      if (data.success) {

        // Normal Response
        if (Array.isArray(data.employees)) {
          setEmployees(data.employees);

          setTotalPages(
            data.totalPages || 1
          );

          setTotalEmployees(
            data.totalEmployees ||
            data.employees.length
          );
        }

        // Fallback Response
        else {
          const employeesArray =
            Object.values(data).filter(
              (item) =>
                item &&
                typeof item === "object" &&
                item._id
            );

          setEmployees(employeesArray);

          setTotalPages(1);

          setTotalEmployees(
            employeesArray.length
          );
        }
      }

    } catch (error) {
      console.log(error);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, search, status]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);

      setEmployees((prev) =>
        prev.filter((emp) => emp._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };
  const filteredEmployees = Array.isArray(employees)
    ? employees.filter(
      (emp) =>
        emp.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        emp.email
          ?.toLowerCase()
          .includes(search.toLowerCase())
    )
    : [];

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Employees
          </h1>

          <p className="text-slate-500">
            Manage your workforce
          </p>
        </div>

        <Link
          to="/employees/add"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          <FiPlus />
          Add Employee
        </Link>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-slate-500 text-sm">
            Total Employees
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalEmployees}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-slate-500 text-sm">
            Current Page
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-600">
            {currentPage}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <p className="text-slate-500 text-sm">
            Total Pages
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {totalPages}
          </h2>
        </div>

      </div> */}

      {/* Search */}
      <div className=" mb-6">

        <div className="flex flex-col md:flex-row ">

          <div className="relative mr-2">
            <FiSearch className="absolute left-4 top-4 text-slate-400" />

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className=" pl-12 pr-4 py-3 border rounded-xl"
            />
          </div>

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-xl px-4 py-3"
          >
            <option value="all">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">
            <tr>
              <th className="text-left px-6 py-4">
                Name
              </th>
              <th className="text-left px-6 py-4">
                Email
              </th>
              <th className="text-left px-6 py-4">
                Department
              </th>
              <th className="text-left px-6 py-4">
                Role
              </th>
              <th className="text-left px-6 py-4">
                Status
              </th>
              <th className="text-center px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-10">
                  Loading Employees...
                </td>
              </tr>
            ) : employees.length > 0 ? (
              employees.map((employee) => (
                <tr
                  key={employee._id}
                  className="border-t border-slate-100 hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                        {employee.name?.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium">
                          {employee.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {employee.designation}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {employee.email}
                  </td>

                  <td className="px-6 py-4">
                    {employee.department}
                  </td>

                  <td className="px-6 py-4">
                    {employee.role}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${employee.status === "Inactive"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                        }`}
                    >
                      {employee.status || "Active"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          navigate(
                            `/employees/view/${employee._id}`
                          )
                        }
                        className="p-2 rounded-lg bg-green-100 text-green-600 hover:scale-110 transition"
                      >
                        <FiEye />
                      </button>

                      <button
                        onClick={() =>
                          navigate(
                            `/employees/add/${employee._id}`
                          )
                        }
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:scale-110 transition"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(employee._id)
                        }
                        className="p-2 rounded-lg bg-red-100 text-red-600 hover:scale-110 transition"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-slate-500"
                >
                  No Employees Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-5 border-t border-gray-200">
          <p className="text-sm text-slate-500">
            Total Employees: {totalEmployees}
          </p>

          <div className="flex gap-2">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(
                  (prev) => prev - 1
                )
              }
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              {currentPage}
            </span>

            <button
              disabled={
                currentPage === totalPages
              }
              onClick={() =>
                setCurrentPage(
                  (prev) => prev + 1
                )
              }
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>

          </div>
        </div>

      </div>

    </div>
  );
};

export default EmployeeList;