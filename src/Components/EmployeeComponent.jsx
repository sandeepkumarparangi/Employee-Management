import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
const [emp_name, setEmp_name]=useState('');
const [emp_salary, setEmp_salary]=useState('');
const navigator=useNavigate();

const{id}=useParams()
const [errors,setErrors]=useState({
    emp_name:'',
    emp_salary:''
})
useEffect(()=>{
    if(id){
        axios.get("http://localhost:8080/api/v1/getemployee/"+id).then((response)=>{
            setEmp_name(response.data.emp_name)
            setEmp_salary(response.data.emp_salary)
        }).catch(error =>{
            console.error(error);
        })
    }


},[id]
)
function saveEmployee(e){
    e.preventDefault();
    //const empsalary=Number(emp_salary)

    if(errorfun()){
        const employee={emp_name,emp_salary}
        console.log(employee);
        if(id){
            axios.put("http://localhost:8080/api/v1/updateemployee/"+id,employee).then((response)=>{console.log(response.data); navigator("/employee"); }).catch(error=>{console.error(error)})
        }else{
            axios.post("http://localhost:8080/api/v1/addemployee",employee).then((response)=>{console.log(response.data); navigator("/employee"); })
    }
       
    }

}

function errorfun(){
    let valid=true
    const errorcopy={... errors}
    if(emp_name.trim()){
        errorcopy.emp_name='';
    }
    else{
        errorcopy.emp_name="Name is required";
        valid=false;
    }

    if(String(emp_salary).trim()){
        errorcopy.emp_salary='';
    }
    else{
        errorcopy.emp_salary="Salary is required";
        valid=false
    }
    setErrors(errorcopy);
    return valid;
}
function pagetitle(){
    if(id){
        return <h2 className='text-center'>Update Employee</h2>
    }else{
        return <h2 className='text-center'>Add Employee</h2>
  
    }

}

  return (
    <div className='container'>
        <br></br>
        <br />
        <div className='row'>
            <div className='card custom-container mx-auto'>
                {
                    pagetitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2 text-start'>
                            <label className='form-label ' >Employee Name</label>
                            <input 
                            type='text' 
                            placeholder='Enter the Name' 
                            name='emp_name' 
                            value={emp_name} 
                            className={`form-control ${errors.emp_name?'is-invalid':''}`} 
                            onChange={(e) => setEmp_name(e.target.value)} />
                            {errors.emp_name && <div className='invalid-feedback'> {errors.emp_name}</div>}
                        </div>
                        <div className='form-group mb-2 text-start'>
                            <label className='form-label '>Employee Salary</label>
                            <input 
                            type='text' 
                            placeholder='Enter the salary' 
                            name='emp_salary' 
                            value={emp_salary} 
                            className={`form-control ${errors.emp_salary?'is-invalid':''}`} 
                            onChange={(e) => setEmp_salary(e.target.value)} />
                            {errors.emp_salary && <div className='invalid-feedback'> {errors.emp_salary}</div>}

                        </div>
                        <button type='button' className='btn btn-success' onClick={saveEmployee}>Save</button>

                    </form>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default EmployeeComponent
