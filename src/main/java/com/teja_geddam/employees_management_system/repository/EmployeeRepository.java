package com.teja_geddam.employees_management_system.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teja_geddam.employees_management_system.entity.Employee;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByName(String name);  // keep exact match
    
    List<Employee> findByNameContaining( String name); // partial match
}
