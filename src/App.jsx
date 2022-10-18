import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/App.css'
import './components/InputForm/InputForm'
import InputForm from './components/InputForm/InputForm'
import logo from './assets/logo.jpeg'
import { states, departments } from './components/InputForm/options'
import Modal from './Modal'

function App() {

  const getEmployees = () => {
    return JSON.parse(localStorage?.getItem('employees'))
  }

  let employees = getEmployees()
  console.log(employees);

  const handleSubmit = (event) => {
    event.preventDefault()
    // enregistre l'employé dans le localStorage
    const employee = {
      firstName: document.getElementById('first-name').value,
      lastName: document.getElementById('last-name').value,
      startDate: document.getElementById('start-date').value,
      department: document.getElementById('department').value,
      dateOfBirth: document.getElementById('date-of-birth').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zip-code').value,
    }
    if (employees) {
      localStorage.setItem('employees', JSON.stringify([...employees, employee]))
      employees = getEmployees()
    } else {
      localStorage.setItem('employees', JSON.stringify([employee]))
      employees = getEmployees()
    }

    const form = document.querySelector('form')
    form.reset()

    // afficher un message de confirmation dans une modale
    const modal = document.querySelector('dialog')
    modal.showModal()

  }

  return (
    <>
      <img className='logo' src={logo} alt='logo Wealth Health' />
      <h1 className="title">HRnet</h1>
      <Link to='/employee-list'>View Current Employees</Link>
      <h2 className="title t-margin">Create Employee</h2>

      <form action="#" className='form' onSubmit={handleSubmit}>
        <InputForm type='text' label='First Name' />
        <InputForm type='text' label='Last Name' />
        <InputForm type='date' label='Date of Birth' />
        <InputForm type='date' label='Start Date' />

        <fieldset className='form p-2'>
          <legend>Adress</legend>
          <InputForm type='text' label='Street' />
          <InputForm type='text' label='City' />
          <InputForm type='select' label='State' selectOptions={states} />
          <InputForm type='text' label='Zip Code' />
        </fieldset>

          <InputForm type='select' label='Department' selectOptions={departments} />
          <InputForm type='submit' label='Save' />
      </form>

      <Modal />
    </>
  )
}

export default App
