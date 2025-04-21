package com.employee.EmployeeManagement.repo;

import com.employee.EmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    //List<Employee> findByEmployeeName(String name);
    @Query("SELECT e FROM Employee e WHERE e.Emp_name = :emp_name")
    List<Employee> findByName(@Param("emp_name") String name);


}
