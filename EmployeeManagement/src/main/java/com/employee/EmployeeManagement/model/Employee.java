package com.employee.EmployeeManagement.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Emp_id;
    private String Emp_name;
    private Double Emp_salary;



    public void setEmp_id(Long Emp_id) {
        this.Emp_id = Emp_id;
    }

    public void setEmp_name(String Emp_name) {
        this.Emp_name = Emp_name;
    }

    public void setEmp_salary(Double Emp_salary) {
        this.Emp_salary = Emp_salary;
    }



    public Long getEmp_id() {
        return this.Emp_id;
    }

    public String getEmp_name() {
        return this.Emp_name;
    }

    public Double getEmp_salary() {
        return this.Emp_salary;
    }

}
