import axios from "axios";

const BASE_URL = "http://localhost:9090/api/employees";

class EmployeeService {
  // Fetch all employees
  getAllEmployees() {
    return axios.get(BASE_URL);
  }

  // Fetch single employee by ID
  getEmployeeById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Add employee
  addEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }

  // Update employee
  updateEmployee(id, employee) {
    return axios.put(`${BASE_URL}/${id}`, employee);
  }

  // Delete employee
  deleteEmployee(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new EmployeeService();
