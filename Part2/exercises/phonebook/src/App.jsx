import { useState } from 'react'
import Add from './Components/Add'
import Persons from './Components/Persons'
import Search from './Components/Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

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