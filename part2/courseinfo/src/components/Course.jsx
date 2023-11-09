

const Header = ({ course }) => <h1>{course}</h1>


const Part = ({ part }) => {
console.log(part)
return (
  <p>
    {part.name} {part.exercises}
  </p>
)
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
  <>
    <Part
      part={parts[0]}
    />
    <Part
      part={parts[1]}
    />
    <Part
      part={parts[2]}
    />
  </>
  )

}

const Total = ({ sum }) => <p>Number of exercises {sum}</p>


const Course = (props) => {
  console.log(props)
  return (
  <div>
    <Header course={props.course.name} />
    <Content parts={props.course.parts} />
  </div>
  )
}

export default Course
