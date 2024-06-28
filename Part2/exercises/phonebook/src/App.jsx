import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
  
    // console.log('index: ${persons.indexOf(personObject)}')
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

  const handleNumberChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App