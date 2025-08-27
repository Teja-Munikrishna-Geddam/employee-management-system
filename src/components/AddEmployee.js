import React, { useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  const [employeeId, setEmployeeId] = useState(""); // ID for update
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    department: "",
    email: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle ID input change
  const handleIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  // Add employee
  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post("https://employee-management-system.onrender.com/api", employee)
      .then(() => {
        alert("Employee added successfully!");
        setEmployee({ name: "", salary: "", department: "", email: "" });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  // Update employee
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!employeeId) {
      alert("Please enter an Employee ID to update.");
      return;
    }
    axios
      .put(`https://employee-management-system.onrender.com/api/${employeeId}`, employee)
      .then(() => {
        alert("Employee updated successfully!");
        setEmployeeId("");
        setEmployee({ name: "", salary: "", department: "", email: "" });
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add / Update Employee</h2>
      <form>
        <input
          type="number"
          placeholder="Employee ID(only for update)"
          value={employeeId}
          onChange={handleIdChange}
        />
        <br /><br />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        /><br /><br />

        <button style={{ marginRight: "10px" , marginBottom:"10px"}} onClick={handleAdd}>Add</button> &nbsp;
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default AddEmployee;
