import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const FetchAllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  // Refresh (fetch all)
const refreshEmployees = () => {
    axios
      .get("http://localhost:9090/api/employees")
      .then((response) => {
        console.log("All employees:", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  };

  useEffect(() => {
    refreshEmployees(); // load on mount
  }, []);

  // Fetch by ID
  const fetchById = () => {
    if (!employeeId) return;
    axios
      .get(`http://localhost:9090/api/employees/id/${employeeId}`)
      .then((response) => {
        console.log("Employee by ID:", response.data);
        setEmployees([response.data]); // only one record by id
      })
      .catch((error) => {
        console.error("Error fetching employee by ID:", error);
      });
  };

  const fetchByName = () => {
    if (!employeeName) return;

    axios
      .get(`http://localhost:9090/api/employees/name/${employeeName}`)
      .then((response) => {
        console.log("Employee(s) By Name:", response.data);

        // If backend returns array → set directly
        if (Array.isArray(response.data)) {
          setEmployees(response.data);
          
        } else {
          // If backend returns single object → wrap in array
          setEmployees([response.data]);
          
        }
      })
      .catch((error) => {
        console.error("Error fetching employee by name:", error);
        setEmployees([]); // Clear table on error
      });
      refreshEmployees();
  };


  // Delete by ID
  const deleteById = () => {
    if (!employeeId) return;
    axios
      .delete(`http://localhost:9090/api/employees/${employeeId}`)
      .then(() => {
        alert("Employee deleted successfully!!!");
        refreshEmployees(); // reload all employees
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };


  return (
    <div>
      <input style={{ marginRight: "10px" , marginBottom:"10px" }}
        type="number"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input style={{ marginRight: "10px", marginBottom:"10px" }}
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />

      <br />
      <button style={{ marginRight: "10px", marginBottom:"10px" }} onClick={refreshEmployees}>Refresh Employees</button>
      <button style={{ marginRight: "10px", marginBottom:"10px" }} onClick={fetchById}>Fetch by ID</button>
      <button style={{ marginRight: "10px", marginBottom:"10px" }} onClick={fetchByName}>Fetch by Name</button>
      <button style={{ marginRight: "10px", marginBottom:"10px" }} onClick={deleteById}>Delete by ID</button>

      {/* Pass employees down to EmployeeList */}
      <EmployeeList employees={employees} />
    </div>
  );
};

export default FetchAllEmployee;
