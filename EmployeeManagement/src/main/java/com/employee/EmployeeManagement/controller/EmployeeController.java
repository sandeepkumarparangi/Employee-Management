package com.employee.EmployeeManagement.controller;


import com.employee.EmployeeManagement.model.Employee;
import com.employee.EmployeeManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")

public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employee")
    public ResponseEntity<List<Employee>> getAllEmployee(){
       List<Employee> emp = employeeService.getAllEmployee();
        return ResponseEntity.ok(emp);
    }
    @GetMapping("/getemployee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Optional<Employee> emp= employeeService.getEmployeeById(id);
        return ResponseEntity.ok(emp.get());
    }

    @PostMapping("/addemployee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee){
        Employee emp= employeeService.addEmployee(employee);
        return new ResponseEntity<>(emp,HttpStatus.CREATED);

    }

    @PutMapping("/updateemployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee emp=employeeService.updateEmployee(id,employee);
        return new ResponseEntity<>(emp,HttpStatus.OK);
    }
    @DeleteMapping("deleteemployee/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id){
         employeeService.deleteEmployee(id);
         return ResponseEntity.ok("Employee deleted successfully");
    }

    @GetMapping("/searchemployee")
    public ResponseEntity<List<Employee>> searchEmployee(@RequestParam String query){
        List<Employee> emp=employeeService.findByEmployeeName(query);
        return ResponseEntity.ok(emp);
    }


}
