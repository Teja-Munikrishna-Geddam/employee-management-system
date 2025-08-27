import React from "react";

const EmployeeList = ({ employees }) => {
  console.log("Employees received in EmployeeList:", employees);

  if (!employees || employees.length === 0) {
    return <p>No employees found.</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Employee List</h2>
      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>Emp ID</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Salary</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Department</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{emp.id}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{emp.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{emp.salary}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{emp.department}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
