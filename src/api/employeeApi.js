import api from "./axios";

// Get All Employees
export const getEmployees = async ({
  page = 1,
  limit = 10,
  search = "",
  status = "all",
} = {}) => {
  try {
    const token = sessionStorage.getItem("token");

    const queryParams = new URLSearchParams({
      page,
      limit,
      search,
      status,
    });

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/all?${queryParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch employees"
      );
    }

    return data;
  } catch (error) {
    console.error("Get Employees Error:", error);
    throw error;
  }
};

// Create Employee
export const createEmployee = async (employeeData) => {
  const token = sessionStorage.getItem("token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/create`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(employeeData),
    }
  );

  const data = await response.json();
  return data;
};
// Get Single Employee
export const getEmployeeById = async (id) => {
  const token = sessionStorage.getItem("token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const data = await response.json();
  return data;
};

// Update Employee
export const updateEmployee = async (
  id,
  employeeData
) => {
  const token = sessionStorage.getItem("token");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/update/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(employeeData),
    }
  );

  const data = await response.json();
  return data;
};

// Delete Employee
export const deleteEmployee = async (id) => {
  const { data } = await api.delete(
    `/users/delete/${id}`
  );
  return data;
};