import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployeeById } from "../../api/employeeApi";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
} from "react-icons/fi";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id);

        if (data.success) {
          setEmployee(data.employee);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-red-500">
          Employee Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate("/employees")}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-white shadow rounded-lg hover:bg-gray-100 transition"
      >
        <FiArrowLeft />
        Back
      </button>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-4xl font-bold">
              {employee?.name?.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {employee.name}
              </h1>

              <p className="text-blue-100 mt-1">
                {employee.designation || "Employee"}
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <FiUser className="text-blue-600 text-xl" />
              <h3 className="font-semibold">Name</h3>
            </div>
            <p>{employee.name}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <FiMail className="text-blue-600 text-xl" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p>{employee.email}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <FiPhone className="text-blue-600 text-xl" />
              <h3 className="font-semibold">Phone</h3>
            </div>
            <p>{employee.phone || "N/A"}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <FiBriefcase className="text-blue-600 text-xl" />
              <h3 className="font-semibold">Department</h3>
            </div>
            <p>{employee.department || "N/A"}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Designation
            </h3>
            <p>{employee.designation || "N/A"}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl hover:shadow-md transition">
            <h3 className="font-semibold mb-2">
              Status
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                employee.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {employee.status || "Inactive"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;