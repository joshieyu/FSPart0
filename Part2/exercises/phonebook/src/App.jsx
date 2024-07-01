import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './Components/Add'
import Persons from './Components/Persons'
import Search from './Components/Search'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  const numbersToShow = persons.filter((person => person.name.toLowerCase().includes(newSearch.toLowerCase())))

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    if (persons.some(person => person.name === personObject.name))
    {
      alert(`${personObject.name} is already added to the phonebook`);
    }
    else 
    {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={newSearch} handler={handleSearchChange} />
      <h2>Add a new</h2>
      <Add onSubmitHandler={addNumber} nameValue={newName} nameChangeHandler={handleNameChange} numberValue={newNumber} numberChangeHandler={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={numbersToShow} />
    </div>
  )
}

export default App