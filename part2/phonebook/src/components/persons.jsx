const Persons = (props) => {
  return (
    <>
      {props.filtered.map(person =>
        <Person key={person.id} name={person.name} number={person.number} />
      )}
    </>
  )
}

const Person = ({ name, number }) => {
  return (
    <div>{name} {number}</div>
  )
}

export default Persons
