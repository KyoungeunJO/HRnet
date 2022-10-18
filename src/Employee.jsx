import { Link } from 'react-router-dom'
import Table from './components/Table/Table'

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
    <Link to='/'>Home</Link>
   </>
  )
}

export default Employee
