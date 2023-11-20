import { useLayoutEffect, useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <li>{name} {number}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '07745646169'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const personObject =  {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleAddName = (e) => {
    setNewName(e.target.value)
  }

  const handleAddNumber= (e) => {
    setNewNumber(e.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleAddName} />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleAddNumber}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </ul>
    </div>
  )
}

export default App
