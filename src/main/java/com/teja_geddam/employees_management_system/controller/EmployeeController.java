package com.teja_geddam.employees_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.teja_geddam.employees_management_system.entity.Employee;

import com.teja_geddam.employees_management_system.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping
	public List<Employee> getEmployees() {
		return employeeService.getAllEmployees();
	}
	
	@PostMapping
	public Employee addEmployee(@RequestBody Employee emp) {
		return employeeService.saveEmployee(emp);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
		return employeeService.getEmployeeById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/name/{name}")
	public ResponseEntity<List<Employee>> getEmployeeByConatinsName(@PathVariable String name) {
	    List<Employee> employees = employeeService.getEmployeeByContainingName(name);
	    if (employees.isEmpty()) {
	        return ResponseEntity.notFound().build();
	    }
	    return ResponseEntity.ok(employees);
	}
	public ResponseEntity<Employee> getEmployeeByName(@PathVariable String name) {
		return employeeService.getEmployeeByName(name).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {
	    return employeeService.updateEmployeeById(id, emp)
	            .map(ResponseEntity::ok)
	            .orElse(ResponseEntity.notFound().build());
	}


	
	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}
}
