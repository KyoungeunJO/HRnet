import { useState } from 'react'
import { Link } from 'react-router-dom'

function Employee() {

  return (
   <>
    <h1 className="title">Current Employees</h1>
    <Link to='/'>Home</Link>
   </>
  )
}

export default Employee
