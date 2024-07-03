import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './Components/Add'
import Persons from './Components/Persons'
import Search from './Components/Search'
import communication from './services/communication'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  // const [inPhonebook, setInPhonebook] = useState(false)


  useEffect(() => {
    communication
    .getAll()
    .then(response => {
      // console.log(response)
      setPersons(response)
    })
  }, [])

  const numbersToShow = persons.filter((person => person.name.toLowerCase().includes(newSearch.toLowerCase())))

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString()
    }

    if (persons.some(person => person.name === personObject.name))
    {
      alert(`${personObject.name} is already added to the phonebook`);
    }
    else 
    {
      communication
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDeleteNumber = (id) => {
    console.log("is this being called?")
    console.log(id)
    communication
      .deleteNumber(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => alert("Error deleting person"))
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
      <Persons persons={numbersToShow} deleteHandler={handleDeleteNumber} />
    </div>
  )
}

export default App