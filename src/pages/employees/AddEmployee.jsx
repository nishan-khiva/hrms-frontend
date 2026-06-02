import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployee, getEmployeeById, updateEmployee } from "../../api/employeeApi";
import toast from "react-hot-toast";
import {
    FiArrowLeft,
    FiUser,
    FiMail,
    FiPhone,
    FiBriefcase,
} from "react-icons/fi";

const AddEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        joiningDate: "",
        shift: "",
        salary: "",
        password: "",
    });
    useEffect(() => {
        if (!id) return;

        const fetchEmployee = async () => {
            try {
                const data = await getEmployeeById(id);

                if (data.success) {
                    const employee = data.employee;

                    setFormData({
                        name: employee.name || "",
                        email: employee.email || "",
                        phone: employee.phone || "",
                        department: employee.department || "",
                        designation: employee.designation || "",
                        joiningDate: employee.joiningDate
                            ? employee.joiningDate.split("T")[0]
                            : "",
                        shift: employee.shift || "",
                        salary: employee.salary || "",
                        password: "",
                    });
                }
            } catch (error) {
                toast.error("Failed to load employee");
            }
        };

        fetchEmployee();
    }, [id]);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            let response;

            if (id) {
                response = await updateEmployee(
                    id,
                    formData
                );

                toast.success(
                    response.message ||
                    "Employee Updated Successfully"
                );
            } else {
                response = await createEmployee(
                    formData
                );

                toast.success(
                    response.message ||
                    "Employee Created Successfully"
                );

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    department: "",
                    designation: "",
                    joiningDate: "",
                    shift: "",
                    salary: "",
                    password: "",
                });
            }

            navigate("/employees");
        } catch (error) {
            toast.error(
                error?.message ||
                "Operation Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-slate-800">
                    {id ? "Edit Employee" : "Add Employee"}
                </h1>

                <p className="text-slate-500 mt-1">
                    {id
                        ? "Update employee profile"
                        : "Create a new employee profile"}
                </p>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Name */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Full Name
                            </label>

                            <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3">
                                <FiUser className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter employee name"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Email
                            </label>

                            <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3">
                                <FiMail className="text-slate-400 mr-3" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Phone Number
                            </label>

                            <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3">
                                <FiPhone className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        {/* Department */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Department
                            </label>

                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                            >
                                <option value="">Select Department</option>
                                <option value="IT">IT</option>
                                <option value="HR">HR</option>
                                <option value="Accounts">Accounts</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>

                        {/* Designation */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Designation
                            </label>

                            <div className="flex items-center border border-slate-300 rounded-xl px-4 py-3">
                                <FiBriefcase className="text-slate-400 mr-3" />
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    placeholder="Software Engineer"
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        {/* Joining Date */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Joining Date
                            </label>

                            <input
                                type="date"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                        {/* Shift */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Shift
                            </label>

                            <select
                                name="shift"
                                value={formData.shift}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                            >
                                <option value="">Select Shift</option>
                                <option value="General">
                                    General (09:00 - 18:00)
                                </option>
                                <option value="Morning">
                                    Morning (06:00 - 15:00)
                                </option>
                                <option value="Night">
                                    Night (22:00 - 06:00)
                                </option>
                            </select>
                        </div>

                        {/* Salary */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Salary
                            </label>

                            <input
                                type="number"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                                placeholder="50000"
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">

                        <button
                            type="button"
                            onClick={() => navigate("/employees")}
                            className="px-6 py-3 border border-slate-300 rounded-xl hover:bg-slate-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-70"
                        >
                            {loading
                                ? id
                                    ? "Updating..."
                                    : "Saving..."
                                : id
                                    ? "Update Employee"
                                    : "Save Employee"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddEmployee;