import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';


const ListEmployeeComponent = () => {
  const [employee,setEmployee]= useState([]);
  const [query,setQuery]=useState('')
  const navigate=useNavigate();

  
  useEffect(()=>{
    getAllEmployee();
  },[]);

  function getAllEmployee(){
    axios.get("http://localhost:8080/api/v1/employee").then((response)=>{setEmployee(response.data)}).catch((error)=>{console.error(error)});

  }

  function addNewEmployee(){
    navigate('/add-employee');

  }
  function updateEmployee(id){

    navigate(`/editemployee/${id}`)
  }
  function deleteFun(id){
    axios.delete("http://localhost:8080/api/v1/deleteemployee/"+id).then((response)=>{ 
      console.log("Deleted Successfully",response)
        getAllEmployee()
    }).catch.error(error=>{console.error("error while deleting",error)})
  }
  function handleSearch(){
    axios.get(`http://localhost:8080/api/v1/searchemployee?query=${query}`).then((response)=>{setEmployee(response.data); navigate("/employee")}).catch(error=>{console.error(error)})
  }

  return (
    <div >
      <div className='d-grid gap-2 d-md-block'>
      <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
           <br>
           </br> <input 
            type='text' 
            placeholder='Enter the Name' 
            name='query' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} />
           <button onClick={handleSearch}>Search</button>

      </div>
      <h1 className='text-start'>List Of Employees</h1>
      <table className='table table-striped table-hover table-bordered' >
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
             <th>Action</th>
          </tr>
        </thead>
        <tbody>{
          employee.map(employee =>
            <tr key={employee.emp_id}>
              <td>{employee.emp_id}</td>
              <td>{employee.emp_name}</td>
              <td>{employee.emp_salary}</td>
               <td><button className='btn btn-primary' onClick={()=>updateEmployee(employee.emp_id)}>Update</button>
                   <button className='btn btn-danger' onClick={()=>deleteFun(employee.emp_id)}>Delete</button></td>
            </tr> 
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
