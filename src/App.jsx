import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import './components/InputForm'
import InputForm from './components/InputForm'

function App() {

  return (
    <>
      <h1 className="title">HRnet</h1>
      <Link to='/employee-list'>View Current Employees</Link>
      <h2 className="title">Create Employee</h2>
      <form action="#">
        <InputForm type='text' label='First Name' />
        <InputForm type='text' label='Last Name' />
        <InputForm type='date' label='Date of Birth' />
        <InputForm type='date' label='Start of Date' />
      </form>
    </>
  )
}

export default App
