package com.teja_geddam.employees_management_system.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teja_geddam.employees_management_system.entity.Employee;
import com.teja_geddam.employees_management_system.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}
	
	public Employee saveEmployee(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	} 
	
	public Optional<Employee> getEmployeeById(Long id) {
		return employeeRepository.findById(id);
	}

	public Optional<Employee> updateEmployeeById(Long id, Employee empDetails) {
	    return employeeRepository.findById(id).map(existingEmp -> {
	        existingEmp.setName(empDetails.getName());
	        existingEmp.setSalary(empDetails.getSalary());
	        existingEmp.setDepartment(empDetails.getDepartment());
	        existingEmp.setEmail(empDetails.getEmail());
	        return employeeRepository.save(existingEmp);
	    });
	}
	
	public Optional<Employee> getEmployeeByName(String name) {
		return employeeRepository.findByName(name);
	}

	public List<Employee> getEmployeeByContainingName(String name) {
		return employeeRepository.findByNameContaining(name);
	}


}
