package com.employee.EmployeeManagement.service;

import com.employee.EmployeeManagement.model.Employee;
import com.employee.EmployeeManagement.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;


    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepo.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);

        // Check if the employee exists
        if (optionalEmployee.isEmpty()) {
            throw new RuntimeException("Employee with ID " + id + " does not exist!");
        }else {

            // Update employee details and save
            Employee existingEmployee = optionalEmployee.get();
            existingEmployee.setEmp_name(employee.getEmp_name());
            existingEmployee.setEmp_salary(employee.getEmp_salary());
            return employeeRepo.save(existingEmployee);
        }
    }

    public void deleteEmployee(Long id) {
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);
        
        if (optionalEmployee.isEmpty()) {
            throw new RuntimeException("Employee with ID " + id + " does not exist!");
        }else {
           employeeRepo.deleteById(id);
        }
    }

    public List<Employee> findByEmployeeName(String query) {
        return employeeRepo.findByName(query);
    }
}
