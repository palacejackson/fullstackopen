import { useLayoutEffect, useState } from 'react'

const Person = ({ name, number }) => {
  return (
    <div>{name} {number}</div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

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

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const searchPersons = () => {
    if (!searchValue) return persons
    return persons.filter(person => person.name.includes(searchValue))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Search:
        <input
          value={searchValue}
          onChange={handleSearch}
        />
      </div>
      <h2>Add new contact</h2>
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
      <>
        {searchPersons().map(person =>
          <Person key={person.id} name={person.name} number={person.number} />
        )}
       </>
    </div>
  )
}

export default App
