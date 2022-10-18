import { Link } from 'react-router-dom'
import Table from '@kyoungeun/react-table'
import './style/Table.css'

function Employee() {

  const employees = JSON.parse(localStorage?.getItem('employees'))
  const headers = [
    "First Name",
    "Last Name",
    "Start Date",
    "Department",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
  ]

  return (
   <>
    <h1 className="title">Current Employees</h1>
    <Table data={employees} headers={headers} />
    <Link to='/' className='link' data-message="This is to go the home page">Home</Link>
   </>
  )
}

export default Employee
